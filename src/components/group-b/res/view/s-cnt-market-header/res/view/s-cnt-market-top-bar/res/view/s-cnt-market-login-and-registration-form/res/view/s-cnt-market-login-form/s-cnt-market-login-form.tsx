import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-login-form',
  styleUrl: 's-cnt-market-login-form.css',
  shadow: false,
  scoped: true
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {
  @Prop()login: any;

   /**
   * ref для закрытия модального окна
   */
   mail: HTMLElement;

  /**
   * ref для закрытия модального окна
   */
  password: HTMLElement;

  render() {
    return (
      <form class="login-form">
        <div class="input-wrapper">
          <div class="input-container">
            <input class="view-input" type="email" ref={(el) => this.mail = el}  placeholder="Электрон почта"/>
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
            <input class="view-input" id="" ref={(el) => this.password = el} type="password" placeholder="Ваш пароль"/>
            <div class="discharge-login">
              {/*должен быть "х" для сброса логина*/}
            </div>
          </div>
          <div class="error-input">
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
        <button class="login-btn">
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
                <svg width="24" height="24" viewBox="0 0 24 24">
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
                <svg width="24" height="24" viewBox="0 0 24 24">
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
                <svg width="24" height="24" viewBox="0 0 24 24">
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
            </div>
          </div>
        </div>
      </form>
    );
  }

// componentDidLoad() {
//  this.input.addEventListener("focus", () => this.mousedown())
//   this.input.addEventListener("focusout", () => this.mouseout())
// }
//
//   /**
//    * Вызов функции закрытия модального окна при условиии что нажал не на блок модалки
//    */
//   public mousedown() {
//     getElement(this.password).id='view-input-focus'
//   };
//
//   /**
//    * Вызов функции закрытия модального окна при условиии что нажал не на блок модалки
//    */
//   public mouseout() {
//     this.input.id=''
//   };
}
