import Project from "../models/Project";

export interface LoadProjectById {
  loadProjectById: (projectId: string) => Promise<LoadProjectById.Result>;
}

export namespace LoadProjectById {
  export type Result = Project;
}
