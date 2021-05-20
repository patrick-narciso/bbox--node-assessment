export interface AddProject {
  add: (project: AddProject.Params) => Promise<AddProject.Result>
};

export namespace AddProject {
  export type Params = {
    userId: string;
    description: string;
  };

  export type Result = boolean;
};