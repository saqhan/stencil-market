import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {Login} from "./res/interface/common.interface";
import {UsersArr} from "../../interface/common.interface";

@Component({
  tag: 's-cnt-market-login-form',
  styleUrl: 's-cnt-market-login-form.css',
  shadow: false,
  scoped: true
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {
  /**
   * объект данных для компонента входа
   * */
  @Prop() login: Login;

  /**
   * массив с данными пользователей
   * */
  @Prop() users: UsersArr[];

  /**
   * ref для закрытия модального окна
   */
  mail: HTMLInputElement;

  /**
   * ref для закрытия модального окна
   */
  password: HTMLInputElement;

  /**
   * ref для закрытия модального окна
   */
  mailError: HTMLElement;

  /**
   * ref для закрытия модального окна
   */
  passwordError: HTMLElement;

  /**
   * ref для закрытия модального окна
   */
  logInBtn: HTMLElement;

  render() {
    return (
      <form class="login-form">
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="email" placeholder="Электронная почта" ref={(el) => this.mail = el}
                   onBlur={() => this.validateMail()}
            />
            <div class="discharge-login">
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input" ref={(el) => this.mailError = el}>
            {/*Email адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" id="" type="password" placeholder="Ваш пароль" ref={(el) => this.password = el}
                   onBlur={() => this.validatePassword()}
            />
            <div class="discharge-login">
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input" ref={(el) => this.passwordError = el}>
            {/*password адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="checkbox-wrapper">
          <label class="">
            <input class="checkbox-input" type="checkbox"/>
            {/*<span class="checkbox-span">*/}
            {/*/!*дожна быть галочка*!/*/}
            {/*</span>*/}
            <span class="remember-me-check">
              {this.login.rememberMe}
            </span>
          </label>
        </div>
        <button class="login-btn" ref={(el) => this.logInBtn = el}>
          {this.login.logIn}
        </button>
        <button class="remind-password">
          {this.login.remindPass}
        </button>
        <div class="login-through-wrapper">
          <button class="login-through-bankId">
            <span innerHTML={this.login.bankIcon}>
              {/*svg иконки банка*/}
            </span>
            {this.login.logInToBank}
          </button>
          <div class="login-through-social">
            <p>
              {this.login.orLogInSocial}
            </p>
            <div>
              <SocialIcons arr={this.login.socialIcons}/>
            </div>
          </div>
        </div>
      </form>
    );
  }

  /**
   * функция для проверки валидации написания mail
   * */
  public validateMail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let mail = this.mail.value;
    if (reg.test(mail) == false) {
      this.mailError.innerHTML = 'Введите корректный e-mail';
      this.mail.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.logInBtn.setAttribute("disabled", "disabled")

      return false;
    } else {
      this.mailError.innerHTML = '';
      this.mail.style.boxShadow = 'none';
      this.logInBtn.removeAttribute("disabled")
      this.correctMail();
    }
  };

  /**
   * функция для проверки валидации написания пароль
   * */
  public validatePassword() {
    let reg = /(?=.{6,})/;
    let password = this.password.value;
    if (reg.test(password) == false) {
      this.passwordError.innerHTML = 'Пароль должен быть не менее 6 символов';
      this.password.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.logInBtn.setAttribute("disabled", "disabled");
    } else {
      this.passwordError.innerHTML = '';
      this.password.style.boxShadow = 'none';
      this.logInBtn.removeAttribute("disabled");
      this.correctPassword();
    }
  };

  /**
   * переменная для присвоения выбранного пользователя
   * */
  public selectedUser;

  /**
   * функция для проверки есть ли пользователь с таким майл
   * */
  public correctMail() {
    let mailVal = this.mail.value;
    /**
     * сравнение майл пользователя и присвоение переменной из массива если есть такой
     * */
    this.selectedUser = this.users.filter((item) => {
      return mailVal === item.mail;
    })
    if (this.selectedUser.length === 0) {
      this.mailError.innerHTML = 'Пользователя с таким e-mail нет';
      this.mail.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.logInBtn.setAttribute("disabled", "disabled");

      return false;
    } else {
      this.mailError.innerHTML = '';
      this.mail.style.boxShadow = 'none';
      this.logInBtn.removeAttribute("disabled");

      return true;
    }
  };

  /**
   * функция для проверки есть ли пользователь с таким майл
   * */
  public correctPassword() {
    let passValue = this.password.value;
    if (this.correctMail() === true) {
      let pass = this.selectedUser.map(item => item.password)
      if (passValue === pass) {
        this.mailError.innerHTML = '';
        this.mail.style.boxShadow = 'none';
        this.logInBtn.removeAttribute("disabled");
      }
    } else {
      this.mailError.innerHTML = 'Пользователя с таким e-mail нет';
      this.mail.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.logInBtn.setAttribute("disabled", "disabled");
    }
  }

}

/*
* компонентная функция для вывода элементов меню
 */
const SocialIcons = (props) => {
  return props.arr.map((item) => {
    return (
      <button class="login-social-btn">
        <span innerHTML={item.social}>
          {/*svg иконок соц сетей*/}
        </span>
      </button>
    );
  })
}
