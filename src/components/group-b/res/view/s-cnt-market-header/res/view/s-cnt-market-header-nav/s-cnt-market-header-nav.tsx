import {Component, ComponentInterface, h, Prop, State} from "@stencil/core";
import { navBarInterface } from "./res/interface/common.interface";

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

  /*
  * Показывать/скрывать аккаунт юзера
  * */
  @State() isShowUserAccount: boolean;

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="nav-wrapper">
              <div class="catalog">
                <button>
                  <i class="fas fa-bars"></i>
                  <span>{this.navBar.catalogBtn}</span>
                </button>
              </div>
              <div class="nav-search">
                <div class="button-menu">
                  <div
                    class="full-menu-nav-btn"
                    style={{
                      backgroundImage: `url(${this.navBar.backgroundImageFullMenu})`,
                    }}
                  ></div>
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="search-wrapper">
                  <form>
                    <input type="text" placeholder={this.navBar.placeholder} />
                    <button>
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="nav-user-profile">
                <div class="user-profile-btn"
                  onClick={() => this.onClickAccountHandler()}
                >
                  <a><i class={this.navBar.iconUser}></i></a>
                </div>
                <div class='menu-account-wrapper'
                  
                >
                  { this.isShowUserAccount
                    ? <s-cnt-market-account-menu></s-cnt-market-account-menu>
                    : ''
                  }
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
                <a>
                  <i class="fas fa-shopping-cart"></i>
                  <span>{this.navBar.titleCart}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Переключаем состояние аккаунта юзера
   * */
  public onClickAccountHandler() {
    this.isShowUserAccount = !this.isShowUserAccount;
  }

}
