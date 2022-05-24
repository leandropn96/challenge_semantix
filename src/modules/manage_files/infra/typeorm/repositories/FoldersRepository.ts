import { ICreateFolderDTO } from 'src/modules/manage_files/contracts/dtos/ICreateFolders.DTO';
import { IFoldersRepository } from 'src/modules/manage_files/contracts/repositories/IFoldersRepositories';
import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { Folders } from '../schemas/Folders';

@EntityRepository(Folders)
export class FoldersRepository implements IFoldersRepository {
    private ormRepository: Repository<Folders>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Folders);
    }

    public async create({ name }: ICreateFolderDTO, folder_id: string): Promise<Folders> {

        const folder = this.ormRepository.create({ name, folder_id })
        return await this.ormRepository.save(folder)
    }

    public async findByName(name: string): Promise<Folders> {

        return await this.ormRepository.findOne({ where: { name } });
    }
}