import Project from "../models/Project";

export interface LoadProjects {
  loadProjects: () => Promise<LoadProjects.Result>;
}

export namespace LoadProjects {
  export type Result = Project[];
}
