import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-header-body',
  styleUrl: 's-cnt-market-header-body.css',
  shadow: false,
  scoped: true
})
export class SCntMarketHeaderBody implements ComponentInterface {

  render() {
    return (
      <div class="header-body-wrapper" >
        <div class="logo-wrapper">
          <div class="logo"></div>
        </div>
        <div class="header-navbar-list">
          <ul>
            <li class='main-item'>👩‍💻 Для Бизнеса</li>
            <li>Как мы работаем</li>
            <li>Контакты</li>
            <li>Помощь</li>
            <li>Доставка и оплата</li>
          </ul>
        </div>
      </div>
    );
  }

}
