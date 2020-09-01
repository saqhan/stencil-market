import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {
  MarketRemindPasswordInterface,
  MarketUsersArrInterface
} from "../../../../../../../../../../../../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-remind-password',
  styleUrl: 's-cnt-market-remind-password.css',
  shadow: false,
  scoped: true
})
export class SCntMarketRemindPassword implements ComponentInterface {
  /**
   * объект данных для компонента входа
   * */
  @Prop() remindPass: MarketRemindPasswordInterface;

  /**
   * массив с данными пользователей
   * */
  @Prop() users: MarketUsersArrInterface[];

  /**
   * boolean значение
   */
  @Prop() backBtn: boolean;

  /**
   *
   */
  @Event() clickSendMail: EventEmitter;

  /**
   * Закрытие модального модального окна формы входа/регистрации
   */
  @Event() closeLogin: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  mail: HTMLInputElement;

  /**
   * ref для для поключения к кнопке сброса майл
   */
  resetMail: HTMLElement;

  /**
   * ref для закрытия модального окна
   */
  mailError: HTMLElement;

  /**
   * ref для закрытия модального окна
   */
  logInBtn: HTMLElement;

  render() {
    return (
      <div class="remind-password-wrapper">
        {
          this.backBtn ? (
            <div>
              <header class="remind-password-title-wrap">
                <h3>
                  {this.remindPass.afterRemindTitle}
                </h3>
                <p>
                  {this.remindPass.afterRemindText}
                </p>
              </header>
              <div>
                <button class="login-btn" ref={(el) => this.logInBtn = el} onClick={() => this.closeLogin.emit()}>
                  {this.remindPass.afterLogIn}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <header class="remind-password-title-wrap">
                <h3>
                  {this.remindPass.remindTitle}
                </h3>
                <p>
                  {this.remindPass.remindText}
                </p>
              </header>
              <div>
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
                <button class="login-btn" ref={(el) => this.logInBtn = el} onClick={() => this.clickSendMail.emit()}>
                  {this.remindPass.logIn}
                </button>
              </div>
            </div>
          )
        }

      </div>
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
      this.logInBtn.setAttribute("disabled", "disabled");

      let errorVal = 'Введите mail';
      mailValue(this.mail, this.resetMail, this.mailError, errorVal, this.logInBtn);

      return false;
    } else {
      this.mailError.innerHTML = '';
      this.mail.style.boxShadow = 'none';
      this.logInBtn.removeAttribute("disabled");
      this.resetMail.classList.add('hide');
      this.correctMail();
    }

    /**
     *
     * */
    function mailValue(input, reset, error, errorVal, btn) {
      let inp = input.value;
      if (inp !== '') {
        input.style.backgroundColor = 'white';
        reset.classList.remove('hide');
      } else {
        input.style.backgroundColor = '#f7f7f7';
        reset.classList.add('hide');

        error.innerHTML = errorVal;
        input.style.boxShadow = 'inset 0 -2px 0 0 #f36';
        btn.setAttribute("disabled", "disabled");
      }
    }
  };

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
   * функция для сброса введенных данных
   * */
  public reset(block) {
    block.value = '';
  }

  /**
   * переменная для присвоения выбранного пользователя
   * */
  public selectedUser;
}
