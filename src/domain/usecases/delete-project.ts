export interface DeleteProject {
  delete: (projectId: string) => Promise<DeleteProject.Result>
};

export namespace DeleteProject {
  export type Result = boolean;
};