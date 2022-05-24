import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IFilesRepository } from "../../contracts/repositories/IFilesRepositories";
import { StorageProvider } from '../../../../shared/container/providers/StorageProvider/implementations/StorageProvider'
import { IFoldersRepository } from "../../contracts/repositories/IFoldersRepositories";

@Injectable()
export class CreateFilesUseCase {
    constructor(
        @Inject('FilesRepository')
        private filesRepository: IFilesRepository,
        @Inject('StorageProvider')
        private storageProvider: StorageProvider,
        @Inject('FoldersRepository')
        private foldersRepository: IFoldersRepository,
    ) { }

    public async execute(folder: string, file): Promise<void> {

        const { folder_id } = await this.foldersRepository.findByName(folder)

        if (!folder) {
            throw new BadRequestException({
                title: 'Pasta Inexistente!',
                message: `Crie uma pasta com o nome '${folder}' primeiro, em seguida tente novamente.`,
                data: null,
                cod: 'bad.request'
            })
        }

        const server = await this.storageProvider.getServer()

        let file_buffer = Buffer.from(file.buffer, null, Number(file.size))
        const { fileId, fileName } = await this.storageProvider.createFile(file_buffer, server, folder_id, file.originalname)

        await this.filesRepository.create({
            file_id: fileId,
            folder_id,
            name: fileName,
        })

        return
    }
}