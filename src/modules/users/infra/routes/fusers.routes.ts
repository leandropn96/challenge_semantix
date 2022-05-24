import { Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUsersUseCase } from '../../useCases/createUsers/createUsersUseCase';
import { ExportUsersUseCase } from '../../useCases/exportUsers/exportUsersUseCase';

@ApiTags('Users')
@Controller('users')
export class UsersRouter {
    constructor(
        private createUsersUseCase: CreateUsersUseCase,
        private exportUsersUseCase: ExportUsersUseCase
    ) { }

    @Post('import')
    public async import(
        @Res() response: Response
    ): Promise<Response> {
        await this.createUsersUseCase.execute()

        return response.status(200).json({
            title: "Importação bem sucedida!",
            message: "Usuarios gravados no banco de dados.",
            cod: "ok"
        })
    }

    @Get('report')
    public async report(
        @Res() response: Response
    ): Promise<Response> {

        await this.exportUsersUseCase.execute()

        return response.status(200).json({
            title: "Relatorio gerado com sucesso!",
            message: "Relatorio inserido no GoFile.",
            cod: "ok"
        })
    }
}