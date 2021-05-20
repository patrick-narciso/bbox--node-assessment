export interface DeleteUser {
  delete: (userId: string) => Promise<DeleteUser.Result>
};

export namespace DeleteUser {
  export type Result = boolean;
};