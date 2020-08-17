import {Component, ComponentInterface, h, Prop} from '@stencil/core';

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
  @Prop() login: any;

  /**
   * массив с данными пользователей
   * */
  @Prop() users: any;

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

  componentDidLoad() {

  }

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
            {/*Email адрес имеет неправильный формат*/}
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
            <span>
              <svg viewBox="0 0 23 23" class="sberbank_button_1cI8y sberbank_button_35ecI"><g
                transform="translate(58.42 11)">
                <circle fill="none" cx="-46.9" cy="0.5" r="11"/>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"
                      d="M-37.1-4.5c.8 1.6 1.2 3.3 1.2 5 0 6.1-4.9 11-11 11s-11-4.9-11-11v-.7l6.7 3.8 14.1-8.1zm-1.4-2c.3.3.5.6.7 1l-13.5 7.7-6.5-3.7.3-1.2 6.2 3.6 12.8-7.4zm-1.8-1.7c.3.3.7.5 1 .8L-51.2-.6-57-3.8c.2-.4.3-.7.5-1.1l5.2 3 11-6.3zm-1-.7l-9.9 5.7-4.6-2.7c.2-.3.5-.6.8-.9l3.9 2.2 8.6-4.9c.3.1.8.4 1.2.6z"/>
              </g>
              </svg>
            </span>
            {this.login.logInToBank}
          </button>
          <div class="login-through-social">
            <p>
              {this.login.orLogInSocial}
            </p>
            <div>
              <button class="login-social-btn">
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" color="#5780b1">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="currentColor"
                            d="M20.642 14.413c1.783 1.646 2.155 2.451 2.215 2.55.736 1.22-.816 1.316-.816
                            1.316l-2.974.043s-.643.125-1.482-.452c-1.115-.759-2.637-2.738-3.453-2.48-.83.26-.565 2.335-.565
                            2.335s.006.254-.181.458c-.207.215-.609.132-.609.132h-.856s-3.175.013-5.765-2.671C3.336 12.718.978
                            7.247.978 7.247s-.144-.347.01-.532c.177-.207.655-.204.655-.204h3.182s.298.04.512.198c.18.129.277.373.277.373S6
                            8.1 6.682 9.275c1.328 2.289 1.947 2.79
                            2.398 2.543.656-.36.459-3.236.459-3.236s.013-1.045-.332-1.51c-.267-.363-.766-.469-.986-.498-.181-.02.113-.436.495-.62.572-.277
                            1.586-.297 2.78-.284.93.01 1.281-.003 1.281-.003 1.097.264.726 1.286.726 3.727 0
                            .785-.144 1.886.425 2.249.244.162 1.12.185 2.61-2.338.709-1.198
                            1.267-2.322 1.267-2.322s.12-.254.298-.36c.187-.112.435-.112.435-.112l3.349.016s1.007-.125 1.167.33c.171.475-.411
                            1.306-1.776 3.124-2.248 2.985-2.5 2.708-.636 4.432z"/>
                      <path d="M0 0h24v24H0z"/>
                    </g>
                  </svg>
                </span>
              </button>
              <button class="login-social-btn">
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" color="#4561a3">
                    <g fill="none" fill-rule="evenodd">
                    <path fill="currentColor"
                          d="M15.54 11.652h-2.22v9.056h-3.3v-9.056H8.043V8.865h1.979v-1.68c.002-2.443.964-3.893 3.69-3.893h2.247v2.786h-1.507c-1.062 0-1.132.42-1.132 1.2v1.587h2.64l-.418 2.787z"/>
                          <path d="M0 0h24v24H0z"/>
                  </g>
                  </svg>
                </span>
              </button>
              <button class="login-social-btn">
                <span>
                  <svg width="24" height="24" viewBox="6 6 24 24" color="#ff9e00">
                    <path fill="currentColor"
                          d="M21.008 18A3.011 3.011 0 0118 21.008 3.011 3.011 0 0114.992 18 3.011 3.011 0 0118 14.992 3.011 3.011 0 0121.008 18M18 8C12.486 8 8 12.486 8 18s4.486 10 10 10c2.02 0 3.968-.601 5.633-1.74l.029-.02-1.348-1.566-.022.015A7.92 7.92 0 0118 25.95c-4.384 0-7.95-3.566-7.95-7.95s3.566-7.95 7.95-7.95 7.95 3.566 7.95 7.95a7.94 7.94 0 01-.188 1.709c-.25 1.032-.973 1.348-1.516 1.306-.545-.044-1.183-.433-1.188-1.384V18A5.063 5.063 0 0018 12.942 5.063 5.063 0 0012.942 18 5.063 5.063 0 0018 23.058a5.02 5.02 0 003.584-1.493 3.249 3.249 0 002.767 1.504c.727 0 1.448-.243 2.03-.685.599-.455 1.046-1.113 1.294-1.903.04-.128.112-.42.113-.422l.001-.01C27.935 19.413 28 18.78 28 18c0-5.514-4.486-10-10-10"/>
                  </svg>
                </span>
              </button>
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
   * функция для проверки валидации написания mail
   * */
  public validatePassword() {
    let reg = /(?=.{6,})/;
    let password = this.password.value
    if (reg.test(password) == false) {
      this.passwordError.innerHTML = 'Пароль должен быть не менее 6 символов';
      this.password.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.logInBtn.setAttribute("disabled", "disabled");
    } else {
      this.passwordError.innerHTML = '';
      this.password.style.boxShadow = 'none';
      this.logInBtn.removeAttribute("disabled")
      this.correctPassword()

    }
  }

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
      this.logInBtn.setAttribute("disabled", "disabled")

      return false;
    } else {
      this.mailError.innerHTML = '';
      this.mail.style.boxShadow = 'none';
      this.logInBtn.removeAttribute("disabled")

      return true;
    }
  }

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
        this.logInBtn.removeAttribute("disabled")
      }
    } else {
      this.mailError.innerHTML = 'Пользователя с таким e-mail нет';
      this.mail.style.boxShadow = 'inset 0 -2px 0 0 #f36';
      this.logInBtn.setAttribute("disabled", "disabled")
    }
  }

  // public deletecorrectMail(z) {
  //   //просто черновик
  //   let mailVal = z
    // let mailP;
    // this.users.map((item) => {
    //   for (let i = item.mail; i === mailVal; i++) {
    //     if (i === mailVal) {
    //       this.mailError.innerHTML = '';
    //       this.mail.style.boxShadow = 'none';
    //       this.logInBtn.removeAttribute("disabled")
    //     } else {
    //       this.mailError.innerHTML = 'Такого пользовтеля нет';
    //       this.mail.style.boxShadow = 'inset 0 -2px 0 0 #f36';
    //       this.logInBtn.setAttribute("disabled", "disabled")
    //     }
    //   }
    //
    // })

    // let mails = [];
    // this.users.map((item) => {
    //   if (mailVal === item.mail) {
    //     mails.push(item.mail)
    //   } else {
    //     // alert('n')
    //   }

      // let mail = () => {
      //   if (mailVal !== '' || this.validateMail() === false) {
      //     return mailVal
      //   }
      // }
      // console.log(mails.find(() => mail()))


    // })
  //   console.log(this.login.search)
  // }

}
