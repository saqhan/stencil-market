import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "s-cnt-market-header-nav",
  styleUrl: "s-cnt-market-header-nav.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeaderNav implements ComponentInterface {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="nav-wrapper">
              <div class="catalog">
                <button>
                  <i class="fas fa-bars"></i>
                  <span>Каталог</span>
                </button>
              </div>
              <div class="nav-search">
                <div class="button-menu">
                  <img
                    src="https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580"
                    alt=""
                  />
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="search-wrapper">
                  <form>
                    <input type="text" placeholder="Найти в магазине METRO" />
                    <button>
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="nav-user-profile">
                <div class="user-profile-btn">
                  <a ><i class="far fa-user"></i></a>
                </div>
              </div>
              <div class="user-wish-list">
                <a ><i class="far fa-heart"></i></a>
              </div>
              <div class="user-orders">
                <a >
                  <i class="fas fa-history"></i>
                  <span>Заказы</span>
                </a>
              </div>
              <div class="user-cart">
                <a>
                  <i class="fas fa-shopping-cart"></i>
                  <span>Корзина</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
