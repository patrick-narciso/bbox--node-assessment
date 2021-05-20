export interface DeleteProjectRepository {
  delete: (id: string) => Promise<DeleteProjectRepository.Result>
};

export namespace DeleteProjectRepository {
  export type Result = boolean;
};
