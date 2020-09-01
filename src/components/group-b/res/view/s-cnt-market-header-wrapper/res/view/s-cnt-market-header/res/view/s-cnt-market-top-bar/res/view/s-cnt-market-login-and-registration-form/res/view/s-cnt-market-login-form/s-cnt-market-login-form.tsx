import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State} from '@stencil/core';
import {MarketLoginInterface, MarketUsersArrInterface} from "../../../../../../../../../../../../../../../../../index";

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
  @Prop() login: MarketLoginInterface;

  /**
   * массив с данными пользователей
   * */
  @Prop() users: MarketUsersArrInterface[];

  /**
   * State для переключения типа пароля
   * */
  @State() passwordView: boolean;

  /**
   *
   */
  @Event() callRemind: EventEmitter;

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

  /**
   * ref для для поключения к кнопке сброса майл
   */
  resetMail: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса пароля
   */
  resetPass: HTMLElement;

  /**
   * ref для для поключения к кнопке сброса пароля
   */
  passViewRef: HTMLElement;

  render() {
    return (
      <form class="login-form">
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="email" placeholder="Электронная почта"
                   ref={(el) => this.mail = el}
                   onBlur={() => this.validateMail()}
            />
            <div class="discharge-login hide" ref={(el) => this.resetMail = el}
                 onClick={() => {
                   this.reset(this.mail);
                   this.validateMail();
                 }}
            >
              {/*"х" для сброса mail*/}
            </div>
          </div>
          <div class="error-input" ref={(el) => this.mailError = el}>
            {/*Email адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" id="" type={this.passwordView ? 'text' : 'password'}
                   placeholder="Ваш пароль"
                   ref={(el) => this.password = el}
                   onBlur={() => this.validatePassword()}
            />
            <div class="password-view" ref={(el) => this.passViewRef = el} onClick={() => this.passView()}>
              <i class="far fa-eye"></i>
            </div>
            <div class="discharge-login hide" ref={(el) => this.resetPass = el}
                 onClick={() => {
                   this.reset(this.password);
                   this.validatePassword();
                 }}
            >
              {/*"х" для сброса password*/}
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
        <div class="remind-password" onClick={() => this.callRemind.emit()}>
          {this.login.remindPass}
        </div>
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
              <SocialIconsFunctionalComponent arr={this.login.socialIcons}/>
            </div>
          </div>
        </div>
      </form>
    );
  }

  /**
   * вызывается предупреждение когда некоректно заполнен инпут
   * */
  public errorCall(errorBlock, errorText, input) {
    errorBlock.innerHTML = errorText;
    input.style.boxShadow = 'inset 0 -2px 0 0 #f36';
    input.style.backgroundColor = '#f7f7f7';
    this.logInBtn.setAttribute("disabled", "disabled");
  }

  /**
   * убирает предупреждение заполнения инпута
   * */
  public cancelCallError(errorBlock, input) {
    errorBlock.innerHTML = '';
    input.style.boxShadow = 'none';
    this.logInBtn.removeAttribute("disabled");
  }

  /**
   *
   * */
  public onInputValue(input, reset, error, errorVal, view?) {
    let inp = input.value;
    if (inp !== '') {
      input.style.backgroundColor = 'white';
      reset.classList.remove('hide');

      view ? view.style.right = '40px' : '';
    } else {
      input.style.backgroundColor = '#f7f7f7';
      reset.classList.add('hide');

      view ? view.style.right = '13px' : '';
      this.errorCall(error, errorVal, input);
    }
  }

  /**
   * функция для проверки валидации написания mail
   * */
  public validateMail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let mail = this.mail.value;
    if (reg.test(mail) == false) {
      //вызывается предупреждение некоректного заполнения инпута
      this.errorCall(this.mailError, 'Введите корректный e-mail', this.mail);
      //вызывается предупреждение незаполнения инпута и смена backgroundColor инпута при заполнении и т.д.
      let errorVal = 'Введите mail';
      this.onInputValue(this.mail, this.resetMail, this.mailError, errorVal, this.logInBtn);

      return false;
    } else {
      //убирает предупреждение некоректного заполнения инпута
      this.cancelCallError(this.mailError, this.mail);
      //скрывает кнопку очистки значения инпута так как он пустой
      this.resetMail.classList.add('hide');
      //функция для проверки есть ли пользователь с таким майл
      this.correctMail();
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
    this.selectedUser = this.users.filter((item) => mailVal === item.mail);
    if (this.selectedUser.length === 0) {
      //вызывается предупреждение некоректного заполнения инпута
      this.errorCall(this.mailError, 'Пользователя с таким e-mail нет', this.mail);

      return false;
    } else {
      //убирает предупреждение некоректного заполнения инпута
      this.cancelCallError(this.mailError, this.mail);
      this.mail.style.backgroundColor = '#e8f0fe';
      return true;
    }
  };

  /**
   * функция для проверки валидации написания пароль
   * */
  public validatePassword() {
    let reg = /(?=.{6,})/;
    let password = this.password.value;
    if (reg.test(password) == false) {
      let errorCallVal = 'Пароль должен быть не менее 6 символов';
      this.errorCall(this.passwordError, errorCallVal, this.password);

      let errorVal = 'Пароль не введен';
      this.onInputValue(this.password, this.resetPass, this.passwordError, errorVal, this.passViewRef);
    } else {
      this.cancelCallError(this.passwordError, this.password);

      this.resetPass.classList.add('hide');
      this.correctPassword();
    }
  };

  /**
   * функция для проверки есть ли пользователь с таким майл
   * */
  public correctPassword() {
    let passValue = this.password.value;
    if (this.correctMail() === true) {
      let pass = this.selectedUser.map(item => item.password);
      if (passValue === pass[0]) {
        this.cancelCallError(this.passwordError, this.password);
        this.password.style.backgroundColor = '#e8f0fe';
      } else {
        let errorCallVal = 'Пользователя с таким password нет';
        this.errorCall(this.passwordError, errorCallVal, this.password);
      }
    } else {
      let errorCallVal = 'Пользователя с таким password нет';
      this.errorCall(this.passwordError, errorCallVal, this.password);
    }
  }

  /**
   * функция для сброса введенных данных
   * */
  public reset(block) {
    block.value = '';
  }

  /**
   * функция для смены типа инпут путем изменения стейт
   * */
  public passView() {
    this.passwordView = !this.passwordView;
  }

}

/*
* компонентная функция для вывода элементов меню
 */
const SocialIconsFunctionalComponent = (props) => {
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
