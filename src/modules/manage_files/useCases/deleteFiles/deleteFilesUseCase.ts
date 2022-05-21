import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IFilesRepository } from "../../contracts/repositories/IFilesRepositories";

@Injectable()
export class DeleteFilesUseCase {
    constructor(
        @Inject('FilesRepository')
        private filesRepository: IFilesRepository,
    ) { }

    public async execute(name: string, folder_name: string): Promise<void> {

        const folder = await this.filesRepository.findByName(name)

        if (!folder) {
            throw new BadRequestException({
                title: 'Arquivo Não encontrato!',
                message: `Não foi encontrado nem um aquivo com o nome '${name}'.`,
                data: null,
                cod: 'bad.request'
            })
        }

        await this.filesRepository.delete(folder.id)

        return
    }
}