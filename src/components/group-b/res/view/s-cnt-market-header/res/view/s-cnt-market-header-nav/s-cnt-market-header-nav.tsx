import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";
import {
  leftMenuCatalogInterface,
  navBarInterface,
} from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-header-nav",
  styleUrl: "s-cnt-market-header-nav.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeaderNav implements ComponentInterface {
  /*
   * массив данных для навигации
   **/
  @Prop() navBar: navBarInterface;

  /**
   * магазины для вашего города
   * */
  @Prop() selectShops: any;

  /**
   * Данные для магазинов из каталога
   * */
  @Prop() leftMenuCatalogArr: leftMenuCatalogInterface[] = [];

  /*
   * Показывать/скрывать аккаунт юзера
   * */
  @State() isShowUserAccount: boolean;

  /*
   * Показывать/скрывать левое меню-каталог
   * */
  @State() openedLeftMenu: boolean;

  /**
   * Показывать/скрывать корзину
   * */
  @State() openedBasket: boolean;

  /**
   * Показывать/скрывать  выбор магазина
   * */
  @State() openedStoreSelect: boolean;

  private modalTag: any;

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="nav-wrapper">
              <div class="catalog">
                <button onClick={() => this.onClickCatalogHandler()}>
                  <i class="fas fa-bars"></i>
                  <span>{this.navBar.catalogBtn}</span>
                </button>
                {
                  <s-cnt-market-left-menu-catalog
                    leftMenuCatalogArr={this.leftMenuCatalogArr}
                    openedLeftMenu={this.openedLeftMenu}
                    onCloseLeftMenu={() => this.closeLeftMenu()}
                  ></s-cnt-market-left-menu-catalog>
                }
              </div>
              <div class="nav-search">
                <div
                  class="button-menu"
                  onClick={() => this.onClickSelectStoreHandler()}
                >
                  <div
                    class="full-menu-nav-btn"
                    style={{
                      backgroundImage: `url(${this.navBar.backgroundImageFullMenu})`,
                    }}
                  ></div>
                  <i class="fas fa-angle-down"></i>
                </div>
                <s-cnt-market-store-select-top
                  selectShops={this.selectShops}
                  openedStoreSelect={this.openedStoreSelect}
                  onCloseStoreSelect={() => this.closeStoreSelect()}
                ></s-cnt-market-store-select-top>
                <div class="search-wrapper">
                  <form>
                    <input
                      type="text"
                      placeholder={this.navBar.placeholder}
                      onFocus={() => this.focusInputSearhHandler()}
                      onBlur={() => this.blurInputSearchHandler()}
                    />
                    <button>
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="nav-user-profile">
                <div
                  class="user-profile-btn"
                  onClick={() => this.onClickAccountHandler()}
                >
                  <a>
                    <i class={this.navBar.iconUser}></i>
                  </a>
                </div>
                <div
                  class="menu-account-wrapper"
                  ref={(el) => (this.modalTag = el)}
                >
                  {this.isShowUserAccount ? (
                    <s-cnt-market-account-menu></s-cnt-market-account-menu>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div class="user-wish-list">
                <a>
                  <i class={this.navBar.iconWishList}></i>
                </a>
              </div>
              <div class="user-orders">
                <a>
                  <i class={this.navBar.iconOrders}></i>
                  <span>{this.navBar.titleOrders}</span>
                </a>
              </div>
              <div class="user-cart">
                <a onClick={() => this.onClickBasketHandler()}>
                  <i class="fas fa-shopping-cart"></i>
                  <span>{this.navBar.titleCart}</span>
                </a>
                <s-cnt-market-basket
                  openedBasket={this.openedBasket}
                  onCloseBasket={() => this.closeBasket()}
                ></s-cnt-market-basket>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * клик на выбор магазина в шапке
   * */
  public onClickSelectStoreHandler() {
    this.openedStoreSelect = true;
  }

  /**
   * Переключаем состояние аккаунта юзера
   **/
  public onClickAccountHandler() {
    this.isShowUserAccount = !this.isShowUserAccount;
  }

  /**
   * Переключаем состояние аккаунта юзера
   * */
  public clickOnModal(event) {
    if (event.target !== this.modalTag) {
      this.onClickAccountHandler();
    }
  }

  /**
   * Show/hide left menu
   * */
  public onClickCatalogHandler() {
    this.openedLeftMenu = true;
  }

  /**
   * Показываь корзину
   * */
  public onClickBasketHandler() {
    this.openedBasket = true;
  }

  /**
   *
   * */
  public closeLeftMenu() {
    this.openedLeftMenu = false;
  }

  /**
   * Закрыть корзину
   * */
  public closeBasket() {
    this.openedBasket = false;
  }

  /**
   * close select store
   * */
  public closeStoreSelect() {
    this.openedStoreSelect = false;
  }

  /**
   * click to input
   * */
  public focusInputSearhHandler() {
    const overlay = document.querySelector(".overlayBackDrop");
    overlay.classList.add("overlay");
  }

  /**
   * blur on input
   * */
  public blurInputSearchHandler() {
    const overlay = document.querySelector(".overlayBackDrop");
    overlay.classList.remove("overlay");
  }
}
