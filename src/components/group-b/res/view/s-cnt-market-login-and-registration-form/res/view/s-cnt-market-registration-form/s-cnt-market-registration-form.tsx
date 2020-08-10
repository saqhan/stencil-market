import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 's-cnt-market-registration-form',
  styleUrl: 's-cnt-market-registration-form.css',
  shadow: false,
  scoped: true
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {

  render() {
    return (
      <form class="registration-form">
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="text" placeholder="Имя и фамилия"/>
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
            Хочу заказывать для бизнеса
          </span>
        </label>
        <label class="label-checkbox-wrapper">
          <input type="checkbox" class="checkbox-for-consent"/>
          <span class="text-consent">
            Хочу заказывать для бизнеса
          </span>
        </label>
        <button class="registration-btn">
          Зарегистрироваться
        </button>
        <footer class="form-footer-custom-conditions">
          Продолжая, я соглашаюсь на обработку персональных данных на
          <button class="custom-conditions-link-btn">
            следующих условиях
          </button>
        </footer>
      </form>
    );
  }

}
