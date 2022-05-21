import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ICreateFolderDTO } from '../../contracts/dtos/ICreateFolders.DTO';
import { CreateFoldersUseCase } from '../../useCases/createFolder/CreateFoldersUseCase';

@ApiTags('Folders')
@Controller('folders')
export class FoldersRouter {
    constructor(
        private createFoldersUseCase: CreateFoldersUseCase
    ) { }

    @Post()
    public async create(@Body() data: ICreateFolderDTO, @Res() response: Response): Promise<Response> {
        await this.createFoldersUseCase.execute(data)
        return response.status(200).json({
            title: "Cadastro bem sucedido!",
            message: "Pasta criada com sucesso",
            cod: "ok"
        })
    }
}