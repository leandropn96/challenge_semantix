import { Module } from "@nestjs/common";
import { FoldersRepository } from '../infra/typeorm/repositories/FoldersRepository'

@Module({
    imports: [],
    providers: [
        {
            provide: 'FoldersRepository',
            inject: [FoldersRepository],
            useClass: FoldersRepository,
        },
    ],
    exports: [
        {
            provide: 'FoldersRepository',
            inject: [FoldersRepository],
            useClass: FoldersRepository,
        },
    ],
})
export class RepositoriesModule { }