import { Module } from '@nestjs/common';
import { ManageFilesModule } from './modules/manage_files/manage_files.module';
import { UsersModule } from './modules/users/users.module';
import { StoragesModule } from './shared/container/providers/StorageProvider/storages.module';
import { ImportUsersModule } from './shared/container/providers/UserProvider/import_users.module';
import { DatabaseModule } from './shared/infra/typeorm/database.module'

@Module({
  imports: [
    DatabaseModule,
    ManageFilesModule,
    StoragesModule,
    UsersModule,
    ImportUsersModule
  ],
})
export class AppModule { }
