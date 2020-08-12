import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-account-menu',
  styleUrl: 's-cnt-market-account-menu.css',
  shadow: false,
  scoped: true
})
export class SCntMarketAccountMenu implements ComponentInterface {

  render() {
    return (
      <div class="account-menu"
           // ref={(el) =>}
      >
        <div class="account-menu-header">Saqhan</div>
        <div class="account-menu-separator"></div>
        <div class="account-menu-i">
          <a class="account-menu-link">
            <div class="account-menu-link-ico">
              <i class="far fa-user-circle"></i>
            </div>
            <div class="account-menu-link-text">
              Профиль
            </div>
          </a>
        </div>
        <div class="account-menu-i">
          <a class="account-menu-link">
            <div class="account-menu-link-ico">
              <i class="fas fa-info-circle"></i>
            </div>
            <div class="account-menu-link-text">
              Условия использования
            </div>
          </a>
        </div>
        <div class="account-menu-separator"></div>
        <div class="account-menu-i">
          <button class='account-menu-link'>
            <div class="account-menu-link-ico">
              <i class="fas fa-door-open"></i>
            </div>
            <div class="account-menu-link-text">
              Выйти
            </div>
          </button>
        </div>
        <div class="account-menu-separator"></div>
        <div class="account-menu-footer">
          <button class="account-menu-footer-link" >Доставка</button>
          <a class="account-menu-footer-link">FAQ</a>
        </div>
      </div>
    );
  }

}
