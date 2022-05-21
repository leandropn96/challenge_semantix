import { Module } from "@nestjs/common";
import { CreateFoldersUseCase } from './createFolder/CreateFoldersUseCase';
import { RepositoriesModule as FoldersRepositoryModule } from "../contracts/repositories.module";


@Module({
    imports: [
        FoldersRepositoryModule
    ],
    providers: [
        CreateFoldersUseCase
    ],
    exports: [
        CreateFoldersUseCase
    ]
})
export class DomainsModule { }
