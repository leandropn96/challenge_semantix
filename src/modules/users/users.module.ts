import { Module } from "@nestjs/common";
import { DomainsModule } from './useCases/domains.module';
import { RepositoriesModule } from './contracts/repositories.module'
import { RoutesModule } from "./infra/routes/routes.module";

@Module({
    imports: [
        RoutesModule,
        DomainsModule,
        RepositoriesModule,
    ],
})
export class UsersModule { }