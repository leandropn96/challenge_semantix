import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { ImportUserProvider } from './implementations/ImportUserProvider';

@Global()
@Module({
    imports: [HttpModule],
    providers: [
        {
            provide: 'ImportUserProvider',
            inject: [ImportUserProvider],
            useClass: ImportUserProvider,
        }
    ],
    exports: [
        {
            provide: 'ImportUserProvider',
            inject: [ImportUserProvider],
            useClass: ImportUserProvider,
        }
    ]
})
export class ImportUsersModule { }