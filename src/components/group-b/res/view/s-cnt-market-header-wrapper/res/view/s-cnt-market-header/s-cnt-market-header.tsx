import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";

@Component({
  tag: "s-cnt-market-header",
  styleUrl: "s-cnt-market-header.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeader implements ComponentInterface {

  /**
   * Данные об авторизации пользователя
   * */
  @Prop() login: boolean = false;

  /**
   * Массив данных для хедера
   * */
  @Prop() categories: any;

  /**
   * Обертка для липкого хедера
   * */
  @State() stickyTopTag: HTMLElement;

  componentDidLoad() {
    window.onscroll = () => {
      this.stickyTop();
    };
  }
  render() {
    return (
      <div class="header-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div
                class="header-wrapper-child"
                ref={(el) => (this.stickyTopTag = el)}
              >
                <s-cnt-market-top-bar
                  topBar={this.categories.topBar}
                ></s-cnt-market-top-bar>
                <s-cnt-market-header-body
                  body={this.categories.body}
                ></s-cnt-market-header-body>
                <s-cnt-market-header-nav
                  login={this.login}
                  navBar={this.categories.navBar}
                  selectShops={this.categories.selectShops}
                  leftMenuCatalogArr={this.categories.leftMenuCatalog}
                ></s-cnt-market-header-nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Метод для смены внешнего вида главного меню при скролле
   */
  public stickyTop():void {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 90) {
      this.stickyTopTag.classList.add("sticky");
    } else {
      this.stickyTopTag.classList.remove("sticky");
    }
  }
}
