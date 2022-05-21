import { Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Folders')
@Controller('folders')
export class FoldersRouter {
    constructor() { }

    @Post()
    public async create(@Res() response: Response): Promise<Response> {
        return response.status(200).json({
            title: "Cadastro bem sucedido!",
            message: "Pasta criada com sucesso",
            cod: "ok"
        })
    }
}