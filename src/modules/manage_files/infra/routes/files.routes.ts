import { Body, Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ICreateFolderDTO } from '../../contracts/dtos/ICreateFolders.DTO';

@ApiTags('Files')
@Controller('files')
export class FilesRouter {
    constructor() { }

    @Get()
    public async create(@Body() data: ICreateFolderDTO, @Res() response: Response): Promise<Response> {
        return response.status(200).json({
            title: "Busca bem sucedida!",
            message: "Cats encontrados com sucesso.",
            cod: "ok"
        })
    }
}