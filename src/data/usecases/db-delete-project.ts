import { DeleteProject } from '../../domain/usecases';
import { DeleteProjectRepository } from '../../data/protocols';

export class DbDeleteProjectById implements DeleteProject {
  constructor (private readonly DeleteProjectByIdRepository: DeleteProjectRepository) {}

  async delete(id: string): Promise<DeleteProject.Result> {
    return await this.DeleteProjectByIdRepository.delete(id);
  };
};
