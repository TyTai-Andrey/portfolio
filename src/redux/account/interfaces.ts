export type AccountModel = {
  data: {
    login: string;
    token: string;
  };
};

export interface AccountParams {
  login: string;
  password: string;
}
