import { Folders } from "../../infra/typeorm/schemas/Folders";
import { ICreateFolderDTO } from "../dtos/ICreateFolders.DTO";

export interface IFoldersRepository {
    create(data: ICreateFolderDTO): Promise<Folders>;
    findById(name: string): Promise<Folders>;
}