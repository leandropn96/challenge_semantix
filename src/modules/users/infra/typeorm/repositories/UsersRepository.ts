import { ICreateUsersDTO } from '../../../contracts/dtos/ICreateUsersDTO';
import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { Users } from '../schemas/Users';
import { IUsersRepository } from '../../../contracts/repositories/IUsersRepositories';

@EntityRepository(Users)
export class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<Users>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Users);
    }

    public async create(data: ICreateUsersDTO): Promise<Users> {

        const folder = this.ormRepository.create(data)
        return await this.ormRepository.save(folder)
    }

    public async list(): Promise<Users[]> {

        return await this.ormRepository.find();
    }

    public async findByEmail(email: string): Promise<Users> {

        return await this.ormRepository.findOne({ where: { email } });
    }
}