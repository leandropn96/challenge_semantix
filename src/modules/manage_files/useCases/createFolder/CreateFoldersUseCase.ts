import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { StorageProvider } from "src/shared/container/providers/StorageProvider/implementations/StorageProvider";
import { ICreateFolderDTO } from "../../contracts/dtos/ICreateFolders.DTO";
import { IFoldersRepository } from "../../contracts/repositories/IFoldersRepositories";

@Injectable()
export class CreateFoldersUseCase {
    constructor(
        @Inject('FoldersRepository')
        private foldersRepository: IFoldersRepository,
        @Inject('StorageProvider')
        private storageProvider: StorageProvider
    ) { }

    public async execute(data: ICreateFolderDTO): Promise<void> {

        const folder = await this.foldersRepository.findByName(data.name)

        if (folder) {
            throw new BadRequestException({
                title: 'Pasta Existente!',
                message: `Já existe uma pasta com este nome.`,
                data: null,
                cod: 'bad.request'
            })
        }

        const { id: folder_id } = await this.storageProvider.createFulder(data.name)

        const new_folder = await this.foldersRepository.create(data, folder_id)

        if (!new_folder) {
            throw new BadRequestException({
                title: 'Falha ao cadastrar!',
                message: `Não foi possivel criar a pasta.`,
                data: null,
                cod: 'bad.request'
            })
        }

        return
    }
}