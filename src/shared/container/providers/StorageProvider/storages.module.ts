import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { StorageProvider } from './implementations/StorageProvider';

@Global()
@Module({
    imports: [HttpModule],
    providers: [
        {
            provide: 'StorageProvider',
            inject: [StorageProvider],
            useClass: StorageProvider,
        }
    ],
    exports: [
        {
            provide: 'StorageProvider',
            inject: [StorageProvider],
            useClass: StorageProvider,
        }
    ]
})
export class StoragesModule { }