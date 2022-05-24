import { Module } from "@nestjs/common";
import { UsersRepository } from "../infra/typeorm/repositories/UsersRepository";

@Module({
    providers: [
        {
            provide: 'UsersRepository',
            inject: [UsersRepository],
            useClass: UsersRepository,
        }
    ],
    exports: [
        {
            provide: 'UsersRepository',
            inject: [UsersRepository],
            useClass: UsersRepository,
        }
    ],
})
export class RepositoriesModule { }