import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-registration-form',
  styleUrl: 's-cnt-market-registration-form.css',
  shadow: false,
  scoped: true
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {
  /**
   *
   * */
  @Prop() reg: any;

  /**
   * ref для подключения к картинке
   * */
  regLogin: HTMLInputElement;

  render() {
    return (
      <form class="registration-form">
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" id="reg-login" onBlur={() => this.checkNameValueInput()} type="text"
                   placeholder="Имя и фамилия"
                   ref={(el) => this.regLogin = el}
            />
            <div class="discharge-login">
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input" id="error-name">

          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="email" placeholder="Электрон почта"/>
            <div class="discharge-login">
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input">
            {/*Email адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="password" placeholder="Пароль"/>
            <div class="discharge-login">
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input">
            {/*Email адрес имеет неправильный формат*/}
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="password" placeholder="Подтверждение пароля"/>
            <div class="discharge-login">
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input">
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
        <button class="registration-btn">
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


  public checkNameValueInput() {
    const input = this.regLogin;
    if (input.value === '' || input.value === ' ') {
      document.getElementById('error-name').innerHTML = 'Укажите имя и фамилию';
      this.regLogin.style.boxShadow = 'inset 0 -2px 0 0 #f36'
    }else {
      document.getElementById('error-name').innerHTML = '';
      this.regLogin.style.boxShadow = 'none'
    }
  }

}
