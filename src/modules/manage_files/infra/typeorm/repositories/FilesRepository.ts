import { ICreateFilesDTO } from 'src/modules/manage_files/contracts/dtos/ICreateFiles.DTO';
import { IFilesRepository } from 'src/modules/manage_files/contracts/repositories/IFilesRepositories';
import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { Files } from '../schemas/Files';

@EntityRepository(Files)
export class FilesRepository implements IFilesRepository {
    private ormRepository: Repository<Files>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Files);
    }

    public async create({ folder_id, name }: ICreateFilesDTO): Promise<Files> {

        const folder = this.ormRepository.create({ name, folder_id })
        return await this.ormRepository.save(folder)
    }

    public async findByName(name: string): Promise<Files> {

        return await this.ormRepository.findOne({ where: { name } });
    }

    public async delete(id: string): Promise<void> {

        await this.ormRepository.delete(id);
        return
    }
}