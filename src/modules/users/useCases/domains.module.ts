import { forwardRef, Module } from "@nestjs/common";
import { RepositoriesModule as UserssRepositoryModule } from "../contracts/repositories.module";
import { CreateUsersUseCase } from './createUsers/createUsersUseCase';
import { ExportUsersUseCase } from './exportUsers/exportUsersUseCase';
import { StoragesModule } from "../../../shared/container/providers/StorageProvider/storages.module";

@Module({
    imports: [
        UserssRepositoryModule,
        forwardRef(() => StoragesModule)
    ],
    providers: [
        CreateUsersUseCase,
        ExportUsersUseCase,
    ],
    exports: [
        CreateUsersUseCase,
        ExportUsersUseCase,
    ]
})
export class DomainsModule { }
