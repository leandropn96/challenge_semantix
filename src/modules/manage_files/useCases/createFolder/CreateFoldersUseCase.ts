import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ICreateFolderDTO } from "../../contracts/dtos/ICreateFolders.DTO";
import { IFoldersRepository } from "../../contracts/repositories/IFoldersRepositories";

@Injectable()
export class CreateFoldersUseCase {
    constructor(
        @Inject('FoldersRepository')
        private foldersRepository: IFoldersRepository,
    ) { }

    public async execute(data: ICreateFolderDTO): Promise<void> {

        const folder = await this.foldersRepository.findById(data.name)

        if (folder) {
            throw new BadRequestException({
                title: 'Pasta Existente!',
                message: `Já existe uma pasta com este nome.`,
                data: null,
                cod: 'bad.request'
            })
        }

        const new_folder = await this.foldersRepository.create(data)

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