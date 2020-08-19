export interface Login {
  id: number;
  rememberMe: string;
  logIn: string;
  remindPass: string;
  bankIcon: any;
  logInToBank: string;
  orLogInSocial: string;
  socialIcons: SocialIcons[];
}

export interface SocialIcons {
  id: number;
  social: string;
}
