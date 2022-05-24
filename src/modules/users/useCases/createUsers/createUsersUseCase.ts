import { Inject, Injectable } from "@nestjs/common";
import { IUsersRepository } from "../../contracts/repositories/IUsersRepositories";
import { ImportUserProvider } from '../../../../shared/container/providers/UserProvider/implementations/ImportUserProvider'
let parser = require('xml2json');

@Injectable()
export class CreateUsersUseCase {
    constructor(
        @Inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @Inject('ImportUserProvider')
        private importUserProvider: ImportUserProvider
    ) { }
    public async execute(): Promise<void> {

        let data = []
        let users_form = []
        let next = true
        let page = 1

        do {
            let req = await this.importUserProvider.getUsers(page);
            const req_json = JSON.parse(parser.toJson(req));
            let users = req_json['data'].usersList.item

            if (users) {
                data = users
                page++
            } else {
                next = false
            }

            for (let i = 0; i < data.length; i++) {
                console.log(data[i])
                let req_addres = await this.importUserProvider.getUserAddress(data[i].id)
                const req_json_address = JSON.parse(parser.toJson(req_addres));
                let addres = req_json_address['data'].length > 0 ? req_json_address['data']?.item[0] || req_json_address['data']?.item : { number: 0 }

                let req_contacts = await this.importUserProvider.getUsersContacts(data[i].id)
                const req_json_contacts = JSON.parse(parser.toJson(req_contacts));
                let contact = req_json_contacts['data']?.item[0] || req_json_contacts['data']?.item

                users_form.push({
                    fullName: data[i].firstName + ' ' + data[i].lastName,
                    email: data[i].email,
                    addressNumber: addres.number,
                    phoneNumber: contact.phoneNumber
                })
            }

        } while (next);


        for (let i = 0; i < users_form.length; i++) {
            let user_by_email = await this.usersRepository.findByEmail(users_form[i].email)
            if (!user_by_email) {
                await this.usersRepository.create({
                    fullName: users_form[i].fullName,
                    addressNumber: users_form[i].addressNumber,
                    email: users_form[i].email,
                    phoneNumber: users_form[i].phoneNumber
                })
            }
        }

        return

    }

}