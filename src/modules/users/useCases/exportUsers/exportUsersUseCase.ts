import { Inject, Injectable } from "@nestjs/common";
import { IUsersRepository } from "../../contracts/repositories/IUsersRepositories";
import { ExportToCsv } from 'export-to-csv';
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
        console.log(user_form)

        var data = [
            {
                name: 'Test 1',
                age: 13,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
            {
                name: 'Test 2',
                age: 11,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
            {
                name: 'Test 4',
                age: 10,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
        ];

        const options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'Teste',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
        };

        const csvExporter = new ExportToCsv(options);

        let csv = csvExporter.generateCsv(user_form, true);
        const server = await this.storageProvider.getServer()
        await this.storageProvider.createFile(csv, server, 'c82a7855-bd3a-4e1b-90b1-dd071f3fe284', 'users.csv')

    }

}