import { Module } from '@nestjs/common'
import { DomainsModule } from '../../useCases/domains.module';
import { UsersRouter } from './fusers.routes'

@Module({
    imports: [
        DomainsModule,
    ],
    controllers: [
        UsersRouter
    ],
})
export class RoutesModule { }