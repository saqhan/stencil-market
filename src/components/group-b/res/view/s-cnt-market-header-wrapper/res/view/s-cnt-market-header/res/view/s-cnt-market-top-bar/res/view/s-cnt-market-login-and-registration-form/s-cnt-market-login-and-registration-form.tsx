import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop, State,
} from "@stencil/core";
import {MarketLoginAndRegistrationInterface} from "../../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-login-and-registration-form",
  styleUrl: "s-cnt-market-login-and-registration-form.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {
  /**
   * объект данных для компонента LoginAndRegistrationForm и его подкомпонентов
   */
  @Prop() loginAndRegistration: MarketLoginAndRegistrationInterface;

  /**
   * boolean значение для вывода/закрытия блока входа и присвоения класса
   */
  @Prop() login: boolean;

  /**
   * значения для присвоения ширины блока
   */
  @Prop() blockWidth: string;

  /**
   * boolean значение для вывода/закрытия блока регистрации и присвоения класса
   */
  @Prop() registration: boolean;

  /**
   * boolean значение для вывода и закрытия блока восстановления пароля
   */
  @State() remindPass: boolean;

  /**
   * boolean значение для закрытия блока восстановления пароля и блока после восстановлении пароля
   */
  @State() backBtn: boolean;

  /**
   * Закрытие модального модального окна формы входа/регистрации
   */
  @Event() closeLogin: EventEmitter;

  /**
   * функция для смены значения boolean пропса login
   */
  @Event() openLogin: EventEmitter;

  /**
   * функция для смены значения boolean пропса registration
   */
  @Event() openRegistration: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;

  render() {
    return (
      <section class="login-or-registration-form-wrapper">
        <div class="login-or-registration-opacity-background"
             ref={(el) => (this.ourModal = el)}
             onClick={(event) => this.clickPopUp(event)}
        >
          {/*полупрозрачный бэкграунд*/}
        </div>
        <div class="login-or-registration-form-parent" style={{maxWidth: this.blockWidth}}>
          <div class="login-or-registration-form-child">
            <div class="close-btn-wrapper">
              {
                this.remindPass ? (
                  <button class="close-btn back-btn" onClick={() => this.clickOnBack()}>
                    <i class={this.loginAndRegistration.backIcon}> </i>
                  </button>
                ) : (
                  ""
                )
              }
              <button class="close-btn" onClick={() => this.closeLogin.emit()}>
                <i class={this.loginAndRegistration.closeIcon}> </i>
              </button>
            </div>
            <div>
            </div>
            {/**
             * переключение компонентов посредством стейта, между логин/пароль кнопками и восстановлением пароля
             */}
            {
              this.remindPass ? (
                <s-cnt-market-remind-password
                  remindPass={this.loginAndRegistration.remindPass}
                  backBtn={this.backBtn}
                  users={this.loginAndRegistration.users}
                  onClickSendMail={() => this.clickSendMail()}
                ></s-cnt-market-remind-password>
              ) : (
                <div class="login-or-registration-form-container">
                  <div class="login-or-registration-buttons-wrapper">
                    <button class="login-selection-btn"
                            id={this.login ? "selected-login-or-registration-btn" : ""}
                            onClick={() => this.openLogin.emit()}
                    >
                      {this.loginAndRegistration.loginBtnText}
                    </button>
                    <button class="registration-selection-btn"
                            id={this.registration ? "selected-login-or-registration-btn" : ""}
                            onClick={() => this.openRegistration.emit()}
                    >
                      {this.loginAndRegistration.regBtnText}
                    </button>
                  </div>
                  <div>
                    {/**
                     * переключение компонентов посредством стейта, между кнопками логин/пароль
                     */}
                    {
                      this.login ? (
                        <s-cnt-market-login-form
                          login={this.loginAndRegistration.login}
                          users={this.loginAndRegistration.users}
                          onCallRemind={() => this.callRemind()}
                        />
                      ) : (
                        ""
                      )
                    }
                    {
                      this.registration ? (
                        <s-cnt-market-registration-form
                          reg={this.loginAndRegistration.reg}
                          users={this.loginAndRegistration.users}
                        />
                      ) : (
                        ""
                      )
                    }
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    );
  }

  /**
   * Вызов функции закрытия модального окна при условиии что нажал не на блок модалки
   */
  public clickPopUp(event) {
    if (event.target === this.ourModal) {
      this.closeLogin.emit();
    }
  }

  /**
   * Вызов блока восстановления пароля
   */
  public callRemind() {
    this.remindPass = true;
  }

  /**
   * Вызов следующего блока после отправки почты
   */
  public clickSendMail() {
    this.backBtn = true;
  }

  /**
   *
   */
  public clickOnBack() {
    if (this.remindPass === true) {
      if (this.backBtn === true) {
        this.backBtn = false;
      } else {
        this.remindPass = false;
      }
    }
  }
}
