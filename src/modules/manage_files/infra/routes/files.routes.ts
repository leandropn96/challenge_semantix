import { Body, Controller, Delete, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { DeleteFilesUseCase } from '../../useCases/deleteFiles/deleteFilesUseCase';
import { CreateFilesUseCase } from '../../useCases/createFiles/CreateFilesUseCase'

@ApiTags('Files')
@Controller('files')
export class FilesRouter {
    constructor(
        private deleteFilesUseCase: DeleteFilesUseCase,
        private createFilesUseCase: CreateFilesUseCase
    ) { }

    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                folder: { type: 'string' },
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors()
    @UseInterceptors(FileInterceptor('file'))
    public async create(
        @UploadedFile('file') file,
        @Body('folder') folder: string,
        @Res() response: Response): Promise<Response> {

        await this.createFilesUseCase.execute(folder, file)
        return response.status(200).json({
            title: "Busca bem sucedida!",
            message: "Cats encontrados com sucesso.",
            cod: "ok"
        })
    }

    @Delete(':name/folder/:folder')
    public async remove(
        @Param('name') name: string,
        @Param('folder') folder: string,
        @Res() response: Response): Promise<Response> {

        await this.deleteFilesUseCase.execute(name, folder)

        return response.status(200).json({
            title: "Arquivo removido!",
            message: "Arquivo removido com sucesso",
            cod: "ok"
        })
    }
}