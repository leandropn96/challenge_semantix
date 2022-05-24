import { Files } from "../../infra/typeorm/schemas/Files";
import { ICreateFilesDTO } from "../dtos/ICreateFiles.DTO";

export interface IFilesRepository {
    create(data: ICreateFilesDTO): Promise<Files>;
    delete(id: string): Promise<void>;
    findByNameAndFolder(name: string, folder_id: string): Promise<Files>;
}