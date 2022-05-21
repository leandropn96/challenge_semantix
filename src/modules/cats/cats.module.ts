import { Module } from "@nestjs/common";
import { RoutesModule } from "./infra/routes/routes.module";
import { DomainsModule } from './useCases/domains.module'

@Module({
    imports: [
        RoutesModule,
        DomainsModule
    ],
})
export class CatsModule { }