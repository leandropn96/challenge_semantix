import { forwardRef, Module } from "@nestjs/common";
import { RepositoriesModule as FoldersRepositoryModule } from "../contracts/repositories.module";
import { CreateFoldersUseCase } from './createFolder/CreateFoldersUseCase';
import { CreateFilesUseCase } from './createFiles/CreateFilesUseCase';
import { DeleteFilesUseCase } from './deleteFiles/deleteFilesUseCase';
import { StoragesModule } from "src/shared/container/providers/StorageProvider/storages.module";

@Module({
    imports: [
        FoldersRepositoryModule,
        forwardRef(() => StoragesModule)
    ],
    providers: [
        CreateFoldersUseCase,
        CreateFilesUseCase,
        DeleteFilesUseCase,
    ],
    exports: [
        CreateFoldersUseCase,
        CreateFilesUseCase,
        DeleteFilesUseCase
    ]
})
export class DomainsModule { }
