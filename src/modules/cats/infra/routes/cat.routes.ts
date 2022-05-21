import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Cats')
@Controller('cats')
export class CatsRouter {
    constructor() { }

    @Get()
    public async browser(@Res() response: Response): Promise<Response> {
        return response.status(200).json({
            title: "Busca bem sucedida!",
            message: "Cats encontrados com sucesso.",
            cod: "ok"
        })
    }
}