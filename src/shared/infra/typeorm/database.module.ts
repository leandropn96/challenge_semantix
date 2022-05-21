import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

import { mongodb } from "./mongodb";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [() => ({
                mongodb,
                app: {
                    port: process.env.APP_PORT
                }
            })],
        }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) =>
                config.get<TypeOrmModuleOptions>('mongodb'),
        }),
    ]
})
export class DatabaseModule { }