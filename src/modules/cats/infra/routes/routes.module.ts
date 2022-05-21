import { Module } from '@nestjs/common'
// import { DomainsModule } from '../../useCases/domains.module';
import { CatsRouter } from './cat.routes'

@Module({
    // imports: [
    //     DomainsModule,
    // ],
    controllers: [
        CatsRouter
    ],
})
export class RoutesModule { }