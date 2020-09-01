import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-shipments',
  styleUrl: 's-cnt-market-shipments.css',
  shadow: false,
  scoped: true
})
export class SCntMarketShipments implements ComponentInterface {

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
              <div class="content-header">
                <div class="bread-crumbs">
                  <a>Главная -</a> <a >Профиль</a>
                </div>
                <div class="content-nav">
                  <div class="left">
                    <div class="title">
                    История заказов
                    </div>
                  </div>
                  <div class="right">
                    <div class="btns-parent">
                      <div class="btns-child">
                        <button class="btn-filter active-btn">Все</button>
                        <button class="btn-filter">Активные</button>
                        <button class="btn-filter" >Завершенные</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="no-content">
                <div class="no-content-title">У вас нет завершенных заказов</div>
                <div class="no-content-subtitle">На голом оптимизме не уедешь, приступай к покупкам!</div>
                <div class="no-content-button">
                  <a>Перейт к покупкам</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
