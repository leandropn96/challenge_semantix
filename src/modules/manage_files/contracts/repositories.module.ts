import { Module } from "@nestjs/common";
import { FilesRepository } from "../infra/typeorm/repositories/FilesRepository";
import { FoldersRepository } from '../infra/typeorm/repositories/FoldersRepository'

@Module({
    imports: [],
    providers: [
        {
            provide: 'FoldersRepository',
            inject: [FoldersRepository],
            useClass: FoldersRepository,
        },
        {
            provide: 'FilesRepository',
            inject: [FilesRepository],
            useClass: FilesRepository,
        }
    ],
    exports: [
        {
            provide: 'FoldersRepository',
            inject: [FoldersRepository],
            useClass: FoldersRepository,
        },
        {
            provide: 'FilesRepository',
            inject: [FilesRepository],
            useClass: FilesRepository,
        }
    ],
})
export class RepositoriesModule { }