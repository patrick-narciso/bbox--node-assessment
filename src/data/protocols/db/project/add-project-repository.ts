import { AddProject } from '../../../../domain/usecases';

export interface AddProjectRepository {
  add: (data: AddProjectRepository.Params) => Promise<AddProjectRepository.Result>
};

export namespace AddProjectRepository {
  export type Params = AddProject.Params;
  export type Result = boolean;
};
