import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { StorageProvider } from "../../../../shared/container/providers/StorageProvider/implementations/StorageProvider";
import { IFilesRepository } from "../../contracts/repositories/IFilesRepositories";
import { IFoldersRepository } from "../../contracts/repositories/IFoldersRepositories";

@Injectable()
export class DeleteFilesUseCase {
    constructor(
        @Inject('FilesRepository')
        private filesRepository: IFilesRepository,
        @Inject('FoldersRepository')
        private foldersRepository: IFoldersRepository,
        @Inject('StorageProvider')
        private storageProvider: StorageProvider
    ) { }

    public async execute(file_name: string, folder_name: string): Promise<void> {

        const folder = await this.foldersRepository.findByName(folder_name)

        if (!folder) {
            throw new BadRequestException({
                title: 'Pasta Não existe!',
                message: `Não foi encontrado nem uma pasta com este nome '${folder_name}'.`,
                data: null,
                cod: 'bad.request'
            })
        }

        const file = await this.filesRepository.findByNameAndFolder(file_name, folder.folder_id)

        if (!file) {
            throw new BadRequestException({
                title: 'Arquivo Não encontrato!',
                message: `Não foi encontrado nem um aquivo com o nome '${file_name}' na pasta ${folder_name}, adicione o mesmo na pasta.`,
                data: null,
                cod: 'bad.request'
            })
        }

        await this.storageProvider.deleteFile(file.file_id)

        await this.filesRepository.delete(file.id)

        return
    }
}