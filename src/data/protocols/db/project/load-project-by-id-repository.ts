import Project from '../../../../domain/models/Project';

export interface LoadProjectByIdRepository {
  loadById: (id: string) => Promise<LoadProjectByIdRepository.Result>
};

export namespace LoadProjectByIdRepository {
  export type Result = Project;
};
