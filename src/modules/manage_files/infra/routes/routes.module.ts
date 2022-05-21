import { Module } from '@nestjs/common'
// import { DomainsModule } from '../../useCases/domains.module';
import { FoldersRouter } from './folders.routes'
import { FilesRouter } from './files.routes'

@Module({
    // imports: [
    //     DomainsModule,
    // ],
    controllers: [
        FoldersRouter,
        FilesRouter
    ],
})
export class RoutesModule { }