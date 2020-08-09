import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-left-menu-catalog",
  styleUrl: "s-cnt-market-left-menu-catalog.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketLeftMenuCatalog implements ComponentInterface {
  private leftMenuTag: any;
  // private leftMenuContentTag: any;

  @Prop() openedLeftMenu: boolean;

  /**
   * массив магазинов для вывода
   * */
  @Prop() leftMenuCatalogArr: any;

  @Event() closeLeftMenu: EventEmitter;

  /**
   * показывать/скрывать блок скидок
   * */
  // @State() isShowSalesBlock: boolean;

  /**
   * тег обертки скидок
   * */
  @State() wrapperSales: HTMLElement;

  componentDidLoad() {
    this.checkSales(this.leftMenuCatalogArr);
  }
  render() {
    return (
      <div>
        <div
          // class="drawer-backdrop"
          class={
            this.openedLeftMenu
              ? "drawer-backdrop  opened "
              : "drawer-backdrop "
          }
          ref={(el) => (this.leftMenuTag = el)}
          onClick={(event) => this.clickOnLeftMenuOverlayHandler(event)}
        ></div>
        <div
          class={
            this.openedLeftMenu
              ? "drawer-left drawer-transition opened "
              : "drawer-left drawer-transition "
          }
          // ref={(el) => (this.leftMenuContentTag = el)}
        >
          <div class="drawer-content">
            <div class="category-menu">
              <div class="category-menu-container">
                <div class="category-menu-header">
                  <button
                    class="category-menu-close category-menu-close--sbermarket"
                    onClick={() => this.closeLeftMenuHandler()}
                  >
                    <i class="fas fa-times"></i>
                  </button>
                  <div class="category-menu-logo category-menu-logo--sbermarket"></div>
                </div>
                <div class="category-menu-content">
                  <ul
                    class="category-menu-list d-none "
                    ref={(el) => (this.wrapperSales = el)}
                  >
                    <li class="category-menu-item-placeholder"></li>
                    <li class="category-menu-item category-menu-item-promoted">
                      <a class="category-menu-item-link">
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon sales-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container swing">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                      <div class="category-menu-item-dropdown ">
                        <ul class="category-menu-item-dropdown-list">
                          <li class="category-menu-item">
                            <a class="category-menu-item-link-dropdown">
                              <div class="category-menu-item-content">
                                <div class="category-menu-item-icon"
                                  style={{backgroundImage: `url(https://sbermarket.ru/spree/taxons/4279/normal/2050000.jpg)`}}
                                ></div>
                                <div class="category-menu-item-title">
                                  Электроника и бытовая техника
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="category-menu-item-placeholder"></li>
                  </ul>
                  <ul class="category-menu-list border-gray">
                    {this.getShopsItems(this.leftMenuCatalogArr)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Закрытие меню слева
   * */
  public closeLeftMenuHandler() {
    this.closeLeftMenu.emit();
    // this.leftMenuContentTag.classList.remove("opened");
    // this.leftMenuTag.classList.remove("opened");
  }

  public clickOnLeftMenuOverlayHandler(event) {
    if (event.target === this.leftMenuTag) {
      this.closeLeftMenuHandler();
    }
  }

  /**
   * Получение магазинов
   **/
  public getShopsItems(array) {
    return array.map((item) => {
      return (
        <li class="category-menu-item" id={item.id}>
          <a class="category-menu-item-link">
            <div class="category-menu-item-content ">
              <div
                class="category-menu-item-icon"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div class="category-menu-item-title">{item.title}</div>
            </div>
            <div class="category-menu-item-link-pointer-container swing ">
              <i class="fas fa-angle-right"></i>
            </div>
          </a>
          {this.getSubcategories(item.subcategories)}
        </li>
      );
    });
  }

  public getSubcategories(array){
    return array.map(item => {
      return <div class="category-menu-item-dropdown ">
        <ul class="category-menu-item-dropdown-list">
          <li class="category-menu-item">
            <a class="category-menu-item-link-dropdown">
              <div class="category-menu-item-content">
                <div class="category-menu-item-icon"
                     style={{backgroundImage: `url(${item.img})`}}
                ></div>
                <div class="category-menu-item-title">
                  {item.title}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    })
  }

  /**
   * Получение магазинов
   **/
  public checkSales(array) {
    array.map((item) => {
      if (item.sales) {
        this.wrapperSales.classList.add("visible");
        this.wrapperSales.classList.remove("d-none");
      }
    });
  }
}
