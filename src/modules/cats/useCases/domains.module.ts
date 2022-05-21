import { Module } from "@nestjs/common";
import { ListCatsUseCase } from './listCats/listCatsUseCase'

@Module({
    providers: [
        ListCatsUseCase
    ],
    exports: [
        ListCatsUseCase
    ]
})
export class DomainsModule { }
