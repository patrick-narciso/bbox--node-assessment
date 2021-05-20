import User from "../models/User";

export interface LoadUsers {
  loadUsers: () => Promise<LoadUsers.Result>;
}

export namespace LoadUsers {
  export type Result = User[];
}