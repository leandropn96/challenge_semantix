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

    public async create(data: ICreateFilesDTO): Promise<Files> {

        const folder = this.ormRepository.create(data)
        return await this.ormRepository.save(folder)
    }

    public async findByNameAndFolder(name: string, folder_id: string): Promise<Files> {

        return await this.ormRepository.findOne({ where: { name, folder_id } });
    }

    public async delete(id: string): Promise<void> {

        await this.ormRepository.delete(id);
        return
    }
}