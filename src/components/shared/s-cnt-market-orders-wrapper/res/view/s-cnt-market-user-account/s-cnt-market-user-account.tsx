import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-user-account',
  styleUrl: 's-cnt-market-user-account.css',
  shadow: false,
  scoped: true
})
export class SCntMarketUserAccount implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="sideBar-wrapper">
              <ul class="user-menu" >
                <li>
                  <a class="user-menu-item-link" >
                    <span class="icon-item" ><i class="far fa-user-circle"></i></span>
                    <div class="user-menu-item-title" >Аккаунт  </div>
                    <span class="icon-arrow"><i class="fas fa-angle-right"></i></span>
                  </a>
                </li>
                <li>
                  <a class="user-menu-item-link" >
                    <span class="icon-item" ><i class="far fa-heart"></i></span>
                    <div class="user-menu-item-title" >Любимые товары  </div>
                    <span class="icon-arrow"><i class="fas fa-angle-right"></i></span>
                  </a>
                </li>
                <li>
                  <a class="user-menu-item-link active" >
                    <span class="icon-item" ><i class="fas fa-history"></i></span>
                    <div class="user-menu-item-title" > Заказы  </div>
                    <span class="icon-arrow"><i class="fas fa-angle-right"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <div class="content-wrapper">
              <div class="user-account-wrapper">
                <div class="user-account-title">Информация об аккаунте</div>
                <div class="user-account-container">
                  <div class="user-profile-field">
                    <div class="user-profile-field-label">Имя и фамилия</div>
                    <div class="user-profile-field-value">Saqhan Abaev</div>
                    <div class="user-profile-field-actions">
                      <button class="user-profile-field-action" >Изменить</button>
                    </div>
                  </div>
                  <div class="user-profile-field">
                    <div class="user-profile-field-label">Пароль</div>
                    <div class="user-profile-field-value">*****</div>
                    <div class="user-profile-field-actions">
                      <button class="user-profile-field-action" >Изменить</button>
                    </div>
                  </div>
                  <div class="user-profile-field">
                    <div class="user-profile-field-label">E-mail</div>
                    <div class="user-profile-field-value">saqhan1@mail.ru</div>
                    <div class="user-profile-field-actions">
                      <button class="user-profile-field-action" >Изменить</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
