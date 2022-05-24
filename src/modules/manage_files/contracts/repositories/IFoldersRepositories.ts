import { Folders } from "../../infra/typeorm/schemas/Folders";
import { ICreateFolderDTO } from "../dtos/ICreateFolders.DTO";

export interface IFoldersRepository {
    create(data: ICreateFolderDTO, folder_id: string): Promise<Folders>;
    findByName(name: string): Promise<Folders>;
}