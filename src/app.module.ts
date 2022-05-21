import { Module } from '@nestjs/common';
import { ManageFilesModule } from './modules/manage_files/manage_files.module';
import { DatabaseModule } from './shared/infra/typeorm/database.module'

@Module({
  imports: [
    DatabaseModule,
    ManageFilesModule,
  ],
})
export class AppModule { }
