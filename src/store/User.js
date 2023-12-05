import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this); // при змінах у змінних вище мобх відстежуватиме і відрендруватиме заново
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  getIsAuth() {
    return this._isAuth;
  }

  getUser() {
    return this._user;
  }
}