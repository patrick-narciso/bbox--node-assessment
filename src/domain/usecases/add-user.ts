export interface AddUser {
  add: (user: AddUser.Params) => Promise<AddUser.Result>
};

export namespace AddUser {
  export type Params = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  };

  export type Result = boolean;
};