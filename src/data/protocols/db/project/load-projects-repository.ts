import Project from '../../../../domain/models/Project';

export interface LoadProjectsRepository {
  loadAll: () => Promise<LoadProjectsRepository.Result>
};

export namespace LoadProjectsRepository {
  export type Result = Project[];
};
