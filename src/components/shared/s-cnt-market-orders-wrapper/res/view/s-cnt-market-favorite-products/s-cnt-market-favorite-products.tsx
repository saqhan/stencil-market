import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "s-cnt-market-favorite-products",
  styleUrl: "s-cnt-market-favorite-products.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketFavoriteProducts implements ComponentInterface {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="sideBar-wrapper">
              <ul class="user-menu">
                <li>
                  <a class="user-menu-item-link">
                    <span class="icon-item">
                      <i class="far fa-user-circle"></i>
                    </span>
                    <div class="user-menu-item-title">Аккаунт </div>
                    <span class="icon-arrow">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="user-menu-item-link">
                    <span class="icon-item">
                      <i class="far fa-heart"></i>
                    </span>
                    <div class="user-menu-item-title">Любимые товары </div>
                    <span class="icon-arrow">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="user-menu-item-link active">
                    <span class="icon-item">
                      <i class="fas fa-history"></i>
                    </span>
                    <div class="user-menu-item-title"> Заказы </div>
                    <span class="icon-arrow">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <div class="content-wrapper">
              <div class="user-account-wrapper">
                <div class="empty-favorites">
                  <div class="empty-favorites-icon"><i class="far fa-heart" ></i></div>
                  <div class="empty-favorites-title">Ваш список пуст</div>
                  <div class="empty-favorites-text">Добавить продукты в список можно, зайдя в карточку товара и нажав на сердечко :-)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
