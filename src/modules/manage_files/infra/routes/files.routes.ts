import { Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Files')
@Controller('files')
export class FilesRouter {
    constructor() { }

    @Post()
    public async create(@Res() response: Response): Promise<Response> {
        return response.status(200).json({
            title: "Busca bem sucedida!",
            message: "Cats encontrados com sucesso.",
            cod: "ok"
        })
    }
}