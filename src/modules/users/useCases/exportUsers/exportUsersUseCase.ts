import { Inject, Injectable } from "@nestjs/common";
import { IUsersRepository } from "../../contracts/repositories/IUsersRepositories";
import { clientCsv } from '../../../../configs/csv';
import { StorageProvider } from "src/shared/container/providers/StorageProvider/implementations/StorageProvider";

@Injectable()
export class ExportUsersUseCase {
    constructor(
        @Inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @Inject('StorageProvider')
        private storageProvider: StorageProvider
    ) { }

    public async execute(): Promise<void> {

        let users = await this.usersRepository.list()

        const user_form = users.map(user => {
            return {
                id: user.id,
                fullName: user.fullName,
                email: user.email
            }
        })

        let csv = clientCsv.generateCsv(user_form, true)

        let date = new Date()
        const file_name = "users-" + Math.random() + ".csv"
        const server = await this.storageProvider.getServer()
        await this.storageProvider.createFile(csv, server, '1741b161-03ed-47f8-a1c9-95fefbf0752c', file_name)

        return

    }

}