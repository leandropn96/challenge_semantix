import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IFilesRepository } from "../../contracts/repositories/IFilesRepositories";

@Injectable()
export class CreateFilesUseCase {
    constructor(
        @Inject('FilesRepository')
        private filesRepository: IFilesRepository,
    ) { }

    public async execute(folder_name: string, file): Promise<void> {

        const folder = await this.filesRepository.findByName(folder_name)

        if (folder) {
            throw new BadRequestException({
                title: 'Pasta Existente!',
                message: `Já existe uma arquivo com este nome.`,
                data: null,
                cod: 'bad.request'
            })
        }

        const new_folder = await this.filesRepository.create({ folder_id: folder.folder_id, name: folder_name })

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