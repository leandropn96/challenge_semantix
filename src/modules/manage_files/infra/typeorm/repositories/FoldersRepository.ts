import { ICreateFolderDTO } from 'src/modules/manage_files/contracts/dtos/ICreateFolders.DTO';
import { IFoldersRepository } from 'src/modules/manage_files/contracts/repositories/IFoldersRepositories';
import { EntityManager, EntityRepository, getMongoRepository, MongoRepository, Repository } from 'typeorm';
import { Folders } from '../schemas/Folders';

@EntityRepository(Folders)
export class FoldersRepository implements IFoldersRepository {
    private ormRepository: Repository<Folders>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Folders);
    }

    public async create({ name }: ICreateFolderDTO): Promise<Folders> {
        console.log(name)

        const folder = this.ormRepository.create({ name })
        return await this.ormRepository.save(folder)
    }

    public async findById(name: string): Promise<Folders> {

        return await this.ormRepository.findOne({ where: { name } });
    }
}