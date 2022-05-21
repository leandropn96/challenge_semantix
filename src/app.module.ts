import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { DatabaseModule } from './shared/infra/typeorm/database.module'

@Module({
  imports: [
    DatabaseModule,
    CatsModule,
  ],
})
export class AppModule { }
