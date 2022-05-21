import { Injectable } from "@nestjs/common";
// import { ITagsRepository } from "../../contracts/repositories/ITagsRepository";
// import { ITagModel } from "../../contracts/models/ITagModel";

@Injectable()
export class ListCatsUseCase {
    constructor(
        // @Inject('TagsRepository')
        // private tagsRepository: ITagsRepository,
    ) { }

    public async execute(): Promise<string> {
        return 'my cats';
    }
}