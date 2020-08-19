import {Login} from "../view/s-cnt-market-login-form/res/interface/common.interface";
import {Registration} from "../view/s-cnt-market-registration-form/res/interface/common.interface";

export interface LoginAndRegistration {
  id: number;
  closeIcon: string;
  loginBtnText: string;
  regBtnText: string;
  users: UsersArr[];
  login: Login;
  reg: Registration;
}

export interface UsersArr {
  id: number;
  name: string;
  mail: string;
  password: string;
  forBusiness: string;
  mailing: string;
}
