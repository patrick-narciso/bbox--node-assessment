import User from "../models/User";

export interface LoadUserById {
  loadUserById: (userId: string) => Promise<LoadUserById.Result>;
}

export namespace LoadUserById {
  export type Result = User[];
}
