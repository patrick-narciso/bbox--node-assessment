import { LoadProjectById } from '../../domain/usecases';
import { LoadProjectByIdRepository } from '../../data/protocols';

export class DbLoadProjectById implements LoadProjectById {
  constructor (private readonly LoadProjectByIdRepository: LoadProjectByIdRepository) {}

  async loadProjectById(id: string): Promise<LoadProjectById.Result> {
    return await this.LoadProjectByIdRepository.loadById(id);
  };
};
