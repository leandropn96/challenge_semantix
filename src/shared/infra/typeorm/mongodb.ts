import * as path from 'path';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const mongodb: TypeOrmModuleOptions = {
    name: 'mongo',
    type: 'mongodb',
    port: Number(process.env.MONGO_DB_PORT || 29306),
    host: process.env.MONGO_DB_HOST || 'db-41513.nuvem-brasil-04.absamcloud.com',
    username: process.env.MONGO_DB_USER || 'admin',
    password: String(process.env.MONGO_DB_PASS || 'vccniqog7yzp'),
    database: process.env.MONGO_DB_NAME || 'semantix',
    entities: [path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'modules',
        '**',
        'infra',
        'typeorm',
        'schemas',
        '*',
    ),
    ],
    synchronize: false,
    migrations: [path.resolve(__dirname, 'migrations', '*')],
    logging: ['error', 'warn']
};