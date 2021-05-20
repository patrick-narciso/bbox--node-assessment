import { AddProject } from '../../domain/usecases';
import { AddProjectRepository } from '../protocols';

export class DbAddProject implements AddProject {
  constructor (private readonly AddProjectRepository: AddProjectRepository) {}

  async add(data: AddProject.Params): Promise<boolean> {
    return await this.AddProjectRepository.add(data);
  };
};
