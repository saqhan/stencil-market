import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 's-cnt-market-login-and-registration-form',
  styleUrl: 's-cnt-market-login-and-registration-form.css',
  shadow: false,
  scoped: true
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {

  render() {
    return (
      <section class="login-or-registration-form-wrapper">
        <div class="login-or-registration-opaciry-background">
          {/*полупрозрачный бэкграунд*/}
        </div>
        <div class="login-or-registration-form-parent">
          <div class="login-or-registration-form-child">
            <div class="close-btn-wrapper">
              <button class="close-btn">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="login-or-registration-form-container">
              <div class="login-or-registration-buttons-wrapper">
                <button class="login-selection-btn" id="selected-login-or-registration-btn">
                  Вход
                </button>
                <button class="registration-selection-btn">
                  Регистрация
                </button>
              </div>
              <div>
                <s-cnt-market-login-form/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
