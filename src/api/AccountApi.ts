import { AccountModel, AccountParams } from '@redux/account/interfaces';
import { loadingDelay } from '@utils/data';
import { v4 as uuid } from 'uuid';

export default class AccountApi {
  static getAccount(params: AccountParams): Promise<AccountModel> {
    return new Promise((res) => {
      setTimeout(
        () =>
          res({
            data: { login: params.login, token: uuid() },
          }),
        loadingDelay,
      );
    });
  }
}
