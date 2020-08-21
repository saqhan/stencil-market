import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';
import {Registration} from "./res/interface/common.interface";
import {UsersArr} from "../../interface/common.interface";

@Component({
  tag: 's-cnt-market-registration-form',
  styleUrl: 's-cnt-market-registration-form.css',
  shadow: false,
  scoped: true
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {
  /**
   * объект данных для компонента регистрации
   * */
  @Prop() reg: Registration;

  /**
   * массив с данными пользователей
   * */
  @Prop() users: UsersArr[];

  /**
   * State для переключения типа пароля
   * */
  @State() passwordView: boolean;

  /**
   *State для переключения типа подтверждения пароля
   * */
  @State() passwordConfView: boolean;

  /**********************************/

  /**
   * ref для подключения к блоку error имени и фамилии
   * */
  nameError: HTMLElement;

  /**
   * ref для подключения к блоку error майл
   * */
  mailError: HTMLElement;

  /**
   * ref для подключения к блоку error пароля
   * */
  passwordError: HTMLElement;

  /**
   * ref для подключения к блоку error подтверждение пароля
   * */
  verificationPassError: HTMLElement;
  /**********/

  /**
   * ref для подключения к имени и фамилии
   * */
  regLogin: HTMLInputElement;

  /**
   * ref для подключения к майл
   * */
  regMail: HTMLInputElement;

  /**
   * ref для подключения к пароля
   * */
  regPassword: HTMLInputElement;

  /**
   * ref для подключения к подтверждение пароля
   * */
  regVerificationPass: HTMLInputElement;

  /**
   * ref для подключения к кнопке регистрации
   * */
  btnReg: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса пароля
   */
  resetName: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса пароля
   */
  resetMail: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса пароля
   */
  resetPass: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса подтверждения пароля
   */
  resetConfPass: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса подтверждения пароля
   */
  passViewRef: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса подтверждения пароля
   */
  passConfViewRef: HTMLElement;

  render() {
    return (
      <form class="registration-form">
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" onBlur={() => this.checkNameValueInput()} type="text"
                   placeholder="Имя и фамилия" ref={(el) => this.regLogin = el}
            />
            <div class="discharge-login hide" ref={(el) => this.resetName = el}
                 onClick={() => {
                   this.reset(this.regLogin);
                   this.checkNameValueInput();
                 }}
            >
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input" id="error-name" ref={(el) => this.nameError = el}>
            {/*name адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="email" placeholder="Электрон почта" ref={(el) => this.regMail = el}
                   onBlur={() => {
                     this.checkMailValueInput();
                     this.validateMail();
                   }}
            />
            <div class="discharge-login hide" ref={(el) => this.resetMail = el}
                 onClick={() => {
                   this.reset(this.regMail);
                   this.checkMailValueInput();
                   this.validateMail();
                 }}
            >
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input" ref={(el) => this.mailError = el}>
            {/*Email адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type={this.passwordView ? 'text' : 'password'} placeholder="Пароль"
                   ref={(el) => this.regPassword = el}
                   onBlur={() => {
                     this.checkPasswordValueInput();
                     this.validatePassword();
                   }}
            />
            <div class="password-view" ref={(el) => this.passViewRef = el} onClick={() => this.passView('pass')}>
              <i class="far fa-eye"></i>
            </div>
            <div class="discharge-login hide" ref={(el) => this.resetPass = el}
                 onClick={() => {
                   this.reset(this.regPassword);
                   this.checkPasswordValueInput();
                   this.validatePassword();
                 }}
            >
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input" ref={(el) => this.passwordError = el}>
            {/*password адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type={this.passwordConfView ? 'text' : 'password'}
                   placeholder="Подтверждение пароля"
                   onBlur={() => this.passwordComparison()}
                   ref={(el) => this.regVerificationPass = el}
            />
            <div class="password-view" ref={(el) => this.passConfViewRef = el}
                 onClick={() => this.passView('passConf')}>
              <i class="far fa-eye"></i>
            </div>
            <div class="discharge-login hide" ref={(el) => this.resetConfPass = el}>
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input" ref={(el) => this.verificationPassError = el}>
            {/*Email адрес имеет неправильный формат*/}
          </div>
        </div>
        <label class="label-checkbox-wrapper">
          <input type="checkbox" class="checkbox-for-consent"/>
          <span class="text-consent">
            {this.reg.checkForBis}
          </span>
        </label>
        <label class="label-checkbox-wrapper">
          <input type="checkbox" class="checkbox-for-consent"/>
          <span class="text-consent">
            {this.reg.checkForAdvertisingText}
            <button class="custom-conditions-link-btn">
              {this.reg.checkForAdvertisingLink}
          </button>
          </span>
        </label>
        <button class="registration-btn" ref={(el) => this.btnReg = el}>
          {this.reg.regBtn}
        </button>
        <footer class="form-footer-custom-conditions" id='foot'>
          {this.reg.agreementText}
          <button class="custom-conditions-link-btn">
            {this.reg.agreementLink}
          </button>
        </footer>
      </form>
    );
  }


  /**
   * функция для проверкипустые строки или нет
   * */
  public emptyInput(value, Error, ErrorText) {
    const input = value
    if (input.value === '' || input.value === ' ') {
      Error.innerHTML = ErrorText;
      input.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.btnReg.setAttribute("disabled", "disabled");
    } else {
      Error.innerHTML = '';
      input.style.boxShadow = 'none';
      this.btnReg.removeAttribute("disabled");
    }
  }

  /**
   * функция для проверки name на не заполнение
   * */
  public checkNameValueInput() {
    if (this.regLogin.value !== '') {
      this.regLogin.style.backgroundColor = 'white';
      this.resetName.classList.remove('hide');
    } else {
      this.regLogin.style.backgroundColor = '#f7f7f7';
      this.resetName.classList.add('hide');

      this.nameError.innerHTML = 'Введите e-mail';
      this.regLogin.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.btnReg.setAttribute("disabled", "disabled");
    }
    this.emptyInput(this.regLogin, this.nameError, 'Укажите имя и фамилию');
  }

  /**
   * функция для проверки майл на не заполнение
   * */
  public checkMailValueInput() {
    this.emptyInput(this.regMail, this.mailError, 'Укажите email');
  }

  /**
   * функция для сброса введенных данных
   * */
  public reset(block) {
    block.value = '';
  }

  /**
   * функция для проверки валидации написания mail
   * */
  public validateMail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let mail = this.regMail.value
    if (reg.test(mail) == false) {
      this.mailError.innerHTML = 'Введите корректный e-mail';
      this.regMail.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.btnReg.setAttribute("disabled", "disabled");

      if (mail !== '') {
        this.regMail.style.backgroundColor = 'white';
        this.resetMail.classList.remove('hide');
      } else {
        this.regMail.style.backgroundColor = '#f7f7f7';
        this.resetMail.classList.add('hide');

        this.mailError.innerHTML = 'Введите e-mail';
        this.regMail.style.boxShadow = 'inset 0 -2px 0 0 #f36';
        this.btnReg.setAttribute("disabled", "disabled");
      }
    } else {
      this.mailError.innerHTML = '';
      this.regMail.style.boxShadow = 'none';
      this.btnReg.removeAttribute("disabled");
    }
  }

  /**
   * функция для проверки строки пароль на не заполнение
   * */
  public checkPasswordValueInput() {
    this.emptyInput(this.regPassword, this.passwordError, 'Укажите пароль');
  }

  /**
   * функция для проверки валидации написания пароля
   * */
  public validatePassword() {
    let reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/;
    let password = this.regPassword.value
    if (reg.test(password) == false) {
      this.passwordError.innerHTML = 'Введите корректный пароль(дожны быть латинские ' +
        'буквы "a-z" хотя бы одна заглавная буква "A-Z" и цифра "0-9" и не менее 6 символов)';
      this.regPassword.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.btnReg.setAttribute("disabled", "disabled");

      if (password !== '') {
        this.regPassword.style.backgroundColor = 'white';
        this.resetPass.classList.remove('hide');
        this.passViewRef.style.right = '40px';
      } else {
        this.regPassword.style.backgroundColor = '#f7f7f7';
        this.resetPass.classList.add('hide');

        this.passwordError.innerHTML = 'Введите пароль';
        this.regPassword.style.boxShadow = 'inset 0 -2px 0 0 #f36';
        this.btnReg.setAttribute("disabled", "disabled");
      }
    } else {
      this.passwordError.innerHTML = '';
      this.regPassword.style.boxShadow = 'none';
      this.btnReg.removeAttribute("disabled");
    }
  }

  /**
   * функция для смены типа инпут путем изменения стейт
   * */
  public passView(pasVal) {
    if (pasVal == 'pass') {
      this.passwordView = !this.passwordView;
    } else if (pasVal === 'passConf') {
      this.passwordConfView = !this.passwordConfView;
    }
  }

  /**
   * функция для проверки совпадения паролей
   * */
  public passwordComparison() {
    let password = this.regPassword.value
    let passwordCompareValue = this.regVerificationPass.value
    if (password != passwordCompareValue) {
      this.verificationPassError.innerHTML = 'Введенные пароли должны совпадать';
      this.regVerificationPass.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.btnReg.setAttribute("disabled", "disabled");

      this.regVerificationPass.style.backgroundColor = 'white';
      this.resetConfPass.classList.remove('hide');
      this.passConfViewRef.style.right = '40px';

    } else if (passwordCompareValue === '' || passwordCompareValue === ' ') {
      this.regVerificationPass.style.backgroundColor = '#f7f7f7';
      this.resetConfPass.classList.add('hide');
      this.passConfViewRef.style.right = '13px';

      this.verificationPassError.innerHTML = 'Подтвердите пароль';
      this.regVerificationPass.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.btnReg.setAttribute("disabled", "disabled");
    } else {
      this.verificationPassError.innerHTML = '';
      this.regVerificationPass.style.boxShadow = 'none';
      this.btnReg.removeAttribute("disabled")
    }
  }

  // homeUsers = [
  //
  // ];
  //
  // newUser = {
  //   name: this.regLogin.value,
  //   mail: this.regMail.value,
  //   password: this.regPassword.value,
  // };
  //
  // public addUsers() {
  //   this.homeUsers.push(this.newUser)
  //   console.log(this.homeUsers)
  // }

}
