import { LoadProjects } from '../../domain/usecases';
import { LoadProjectsRepository } from '../../data/protocols';

export class DbLoadProjects implements LoadProjects {
  constructor (private readonly LoadProjectsRepository: LoadProjectsRepository) {}

  async loadProjects(): Promise<LoadProjects.Result> {
    return this.LoadProjectsRepository.loadAll();
  };
};
