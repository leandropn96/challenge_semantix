import { Files } from "../../infra/typeorm/schemas/Files";
import { ICreateFilesDTO } from "../dtos/ICreateFiles.DTO";

export interface IFilesRepository {
    create(data: ICreateFilesDTO): Promise<Files>;
    delete(id: string): Promise<void>;
    findByName(name: string): Promise<Files>;
}