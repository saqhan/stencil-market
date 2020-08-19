import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { NavMenuItemInterface } from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-header-body",
  styleUrl: "s-cnt-market-header-body.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeaderBody implements ComponentInterface {
  @Prop() body: NavMenuItemInterface;

  /**
   *
   */
  public mobileMenuTag: HTMLElement;
  /**
   * show hide bars
   * */

  public isShowBar: boolean;
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header-body-wrapper">
              <div class="logo-wrapper">
                <div
                  class="logo"
                  style={{ backgroundImage: `url(${this.body.logo})` }}
                ></div>
              </div>
              <div class="header-navbar-list">
                <div class="mobile-menu-btn ">
                  {!this.isShowBar ? (
                    <button onClick={() => this.showMobileMenuHandler()}>
                      <i class="fas fa-bars"></i>
                    </button>
                  ) : (
                    ""
                  )}
                  <div
                    class="mobile-menu d-lg-none"
                    ref={(el) => (this.mobileMenuTag = el)}
                  >
                    <div class="container">
                      <div
                        class="mobile-menu-close"
                        onClick={() => this.showMobileMenuHandler()}
                      >
                        <span>
                          <i class="fas fa-times"></i>
                        </span>
                      </div>
                      <nav class="mobile-menu-wrapper">
                        <ul class="mobile-menu-list-wrapper">
                          <li class="main-item">👩‍💻 Для Бизнеса</li>
                          <li>Как мы работаем</li>
                          <li>Контакты</li>
                          <li>Помощь</li>
                          <li>Доставка и оплата</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <ul class="menu-ul">
                  {this.getItemsMenu(this.body.navMenuItem)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Открытие и закрытие мобильного меню при нажатии на иконки
   */
  public showMobileMenuHandler() {
    this.mobileMenuTag.classList.toggle("active");
    this.isShowBar = true;
    console.log(this.isShowBar);
  }
  /*
   * получаем список меню
   * */
  public getItemsMenu(array) {
    return array.map((item) => {
      return <li>{item.name}</li>;
    });
  }
}
