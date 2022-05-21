import { Module } from "@nestjs/common";
import { RoutesModule } from "./infra/routes/routes.module";
import { DomainsModule } from './useCases/domains.module';
import { RepositoriesModule } from './contracts/repositories.module'

@Module({
    imports: [
        RoutesModule,
        DomainsModule,
        RepositoriesModule,
    ],
})
export class ManageFilesModule { }