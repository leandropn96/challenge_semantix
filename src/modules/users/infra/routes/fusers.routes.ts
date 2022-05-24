import { Controller, Post, Res } from '@nestjs/common';
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

    @Post('importacao')
    public async import(@Res() response: Response): Promise<Response> {
        await this.createUsersUseCase.execute()

        return response.status(200).json({
            title: "Importação bem sucedida!",
            message: "Usuarios gravados no banco de dados.",
            cod: "ok"
        })
    }

    @Post('exportacao')
    public async export(@Res() response: Response): Promise<Response> {

        await this.exportUsersUseCase.execute()

        return response.status(200).json({
            title: "Importação bem sucedida!",
            message: "Usuarios gravados no banco de dados.",
            cod: "ok"
        })
    }
}