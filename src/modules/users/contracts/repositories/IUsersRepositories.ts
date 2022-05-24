import { Users } from "../../infra/typeorm/schemas/Users";
import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";

export interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<Users>;
    list(): Promise<Users[]>
    findByEmail(email: string): Promise<Users>;
}