import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-login-and-registration-form',
  styleUrl: 's-cnt-market-login-and-registration-form.css',
  shadow: false,
  scoped: true
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {
  /**
   * boolean значение для вывода/закрытия блока входа и присвоения класса
   */
  @Prop() login: boolean;

  /**
   * boolean значение для вывода/закрытия блока регистрации и присвоения класса
   */
  @Prop() registration: boolean;

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
        <div class="login-or-registration-opaciry-background" ref={(el) => this.ourModal = el}
             onClick={(event) => this.clickPopUp(event)}>
          {/*полупрозрачный бэкграунд*/}
        </div>
        <div class="login-or-registration-form-parent">
          <div class="login-or-registration-form-child">
            <div class="close-btn-wrapper">
              <button class="close-btn" onClick={()=> this.closeLogin.emit()}>
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="login-or-registration-form-container">
              <div class="login-or-registration-buttons-wrapper">
                <button class="login-selection-btn" id={this.login ? 'selected-login-or-registration-btn' : ''}
                        onClick={() => this.openLogin.emit()}>
                  Вход
                </button>
                <button class="registration-selection-btn"
                        id={this.registration ? 'selected-login-or-registration-btn' : ''}
                        onClick={() => this.openRegistration.emit()}>
                  Регистрация
                </button>
              </div>
              <div>
                {
                  this.login ?
                    <s-cnt-market-login-form/> :
                    ''
                }
                {
                  this.registration ?
                    <s-cnt-market-registration-form/> :
                    ''
                }
              </div>
            </div>
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
      this.closeLogin.emit()
    }
  };

}
