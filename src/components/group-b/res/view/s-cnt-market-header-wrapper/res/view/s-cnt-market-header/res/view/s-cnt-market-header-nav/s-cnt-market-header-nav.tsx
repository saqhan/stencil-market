import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";
import {
  MarketLeftMenuCatalogInterface,
  MarketNavBarInterface,
  MarketSelectShopsInterface,
} from "../../../../../../../../../../..";

@Component({
  tag: "s-cnt-market-header-nav",
  styleUrl: "s-cnt-market-header-nav.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeaderNav implements ComponentInterface {


  /**
   * Log in user
   * */
  @Prop() login: boolean;

  /*
   * массив данных для навигации
   **/
  @Prop() navBar: MarketNavBarInterface;

  /**
   * магазины для вашего города
   * */
  @Prop() selectShops: MarketSelectShopsInterface[] = [];

  /**
   * Данные для магазинов из каталога
   * */
  @Prop() leftMenuCatalogArr: MarketLeftMenuCatalogInterface[] = [];

  /*
   * Показывать/скрывать аккаунт юзера
   * */
  @State() isShowUserAccountState: boolean;

  /*
   * Показывать/скрывать левое меню-каталог
   * */
  @State() openedLeftMenuState: boolean;

  /**
   * Показывать/скрывать корзину
   * */
  @State() openedBasketState: boolean;

  /**
   * Показывать/скрывать  выбор магазина
   * */
  @State() openedStoreSelectState: boolean;

  /**
   * Тег для модалки
   * */
  private modalTag: HTMLElement;

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
                    openedLeftMenu={this.openedLeftMenuState}
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
                  openedStoreSelect={this.openedStoreSelectState}
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
                {this.login
                  ? (<div
                    class="user-profile-btn"
                    onClick={() => this.onClickAccountHandler()}
                  >
                    <a>
                      <i class={this.navBar.iconUser}></i>
                    </a>
                  </div>)
                : (<div
                      class=" not-logged"
                    /*TODO*/
                    >
                      <a>
                        <i class={this.navBar.iconUser}></i> Войти
                      </a>
                    </div>)
                }


                <div
                  class="menu-account-wrapper"
                  ref={(el) => (this.modalTag = el)}
                >
                  {this.isShowUserAccountState ? (
                    <s-cnt-market-account-menu
                      onCloseAccountMenu={() => this.closeAccountMenuHandler()}
                    ></s-cnt-market-account-menu>
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
              {this.login
                ? (<div class="user-orders">
                    <a>
                  <i class={this.navBar.iconOrders}></i>
                  <span>{this.navBar.titleOrders}</span>
                    </a>
                  </div>)
                : ''
              }
              <div class="user-cart">
                <a onClick={() => this.onClickBasketHandler()}>
                  <i class="fas fa-shopping-cart"></i>
                  <span>{this.navBar.titleCart}</span>
                </a>
                <s-cnt-market-basket
                  openedBasket={this.openedBasketState}
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
  public onClickSelectStoreHandler(): void  {
    this.openedStoreSelectState = true;
  }

  /**
   * Переключаем состояние аккаунта юзера
   **/
  public onClickAccountHandler(): void  {
    this.isShowUserAccountState = !this.isShowUserAccountState;
  }

  /**
   * close account menu
   * */
  public closeAccountMenuHandler(): void  {
    this.isShowUserAccountState = false;
  }

  /**
   * Переключаем состояние аккаунта юзера
   * */
  public clickOnModal(event): void  {
    if (event.target !== this.modalTag) {
      this.onClickAccountHandler();
    }
  }

  /**
   * Show/hide left menu
   * */
  public onClickCatalogHandler(): void  {
    this.openedLeftMenuState = true;
  }

  /**
   * Показываь корзину
   * */
  public onClickBasketHandler(): void  {
    this.openedBasketState = true;
  }

  /**
   *
   * */
  public closeLeftMenu(): void  {
    this.openedLeftMenuState = false;
  }

  /**
   * Закрыть корзину
   * */
  public closeBasket(): void  {
    this.openedBasketState = false;
  }

  /**
   * close select store
   * */
  public closeStoreSelect(): void  {
    this.openedStoreSelectState = false;
  }

  /**
   * click to input
   * */
  public focusInputSearhHandler(): void  {
    const overlay = document.querySelector(".overlayBackDrop");
    overlay.classList.add("overlay");
  }

  /**
   * blur on input
   * */
  public blurInputSearchHandler(): void {
    const overlay = document.querySelector(".overlayBackDrop");
    overlay.classList.remove("overlay");
  }
}
