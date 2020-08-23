import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import {MarketLeftMenuCatalogInterface} from "../../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-left-menu-catalog",
  styleUrl: "s-cnt-market-left-menu-catalog.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketLeftMenuCatalog implements ComponentInterface {
  /**
   * Обертка для бэкграунда модалки меню слева
   * */
  private leftMenuTag: HTMLElement;

  /**
   * стейт на состояние меню
   * */
  @Prop() openedLeftMenu: boolean;

  /**
   * массив магазинов для вывода
   * */
  @Prop() leftMenuCatalogArr: MarketLeftMenuCatalogInterface[] = [];

  /**
   * Стейт для фильтраций скидов
   * */
  @State() leftMenuCatalogArrState = this.leftMenuCatalogArr;

  /**
   * закрывать меню
   * */
  @Event() closeLeftMenu: EventEmitter;

  /**
   * тег обертки скидок
   * */
  @State() wrapperSales: HTMLElement;

  componentDidLoad() {
    this.checkSales(this.leftMenuCatalogArr);
    this.filterShopsWithSales();
  }

  render() {
    return (
      <div>
        <div
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
        >
          <div class="drawer-content">
            <div class="category-menu">
              <div class="category-menu-container">
                <div class="category-menu-header">
                  <button
                    class="category-menu-close category-menu-close--sbermarket"
                    onClick={() => this.closeLeftMenuHandler()}
                  >
                    <i class="fas fa-times"> </i>
                  </button>
                  <div class="category-menu-logo category-menu-logo--sbermarket">
                    {" "}
                  </div>
                </div>
                <div class="category-menu-content">
                  <ul
                    class="category-menu-list d-none "
                    ref={(el) => (this.wrapperSales = el)}
                  >
                    {/*<li class="category-menu-item-placeholder"></li>*/}
                    <li class="category-menu-item category-menu-item-promoted">
                      <a class="category-menu-item-link">
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon sales-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container swing">
                          <i class="fas fa-angle-right"> </i>
                        </div>
                      </a>
                      <div class="category-menu-item-dropdown ">
                        <GetItemsShopsWithSalesFunctionalComponent
                          sales={this.leftMenuCatalogArrState}
                        ></GetItemsShopsWithSalesFunctionalComponent>
                      </div>
                    </li>
                  </ul>
                  <ul class="category-menu-list border-gray">
                    <ParentMenuFunctionalComponent
                      categories={this.leftMenuCatalogArr}
                    ></ParentMenuFunctionalComponent>
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
  public closeLeftMenuHandler():void {
    this.closeLeftMenu.emit();
  }

  /**
   * Клик на фон меню
   * */
  public clickOnLeftMenuOverlayHandler(event):void {
    if (event.target === this.leftMenuTag) {
      this.closeLeftMenuHandler();
    }
  }

  /**
   * Получение из массива магазинов со скидками
   * */
  public filterShopsWithSales():void {
    this.leftMenuCatalogArrState = this.leftMenuCatalogArr.filter(
      (item) => item.sales
    );
  }

  /**
   * Вывод блока "скидки" если у магазинов ест скидки
   **/
  public checkSales(array): void {
    array.map((item) => {
      if (item.sales) {
        this.wrapperSales.classList.add("visible");
        this.wrapperSales.classList.remove("d-none");
      }
    });
  }
}

/**
 * Получение магазинов в левом меню
 * */
const ParentMenuFunctionalComponent = (props) => {
  return props.categories.map((item) => {
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
            <i class="fas fa-angle-right"> </i>
          </div>
        </a>
        <ChildMenuFunctionalComponent
          subcategories={item.subcategories}
        ></ChildMenuFunctionalComponent>
      </li>
    );
  });
};

/**
 * Компонент высшего порялка для дочерних категорий магазинов
 * */
const ChildMenuFunctionalComponent = (props) => {
  {
    return (
      <div class="category-menu-item-dropdown fc">
        {props.subcategories.map((subcategory) => {
          return (
            // <div class="category-menu-item-dropdown fc">
            <ul class="category-menu-item-dropdown-list">
              <li class="category-menu-item">
                <a class="category-menu-item-link-dropdown">
                  <div class="category-menu-item-content">
                    <div
                      class="category-menu-item-icon"
                      style={{ backgroundImage: `url(${subcategory.img})` }}
                    ></div>
                    <div class="category-menu-item-title">
                      {subcategory.title}
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            // </div>
          );
        })}
      </div>
    );
  }
};

/**
 * Получение магазинов, у которых есть скидки
 * */
const GetItemsShopsWithSalesFunctionalComponent = (props) => {
  {
    return (
      <ul class="category-menu-item-dropdown-list">
        {props.sales.map((item) => {
          return (
            <li class="category-menu-item">
              <a class="category-menu-item-link-dropdown">
                <div class="category-menu-item-content">
                  <div
                    class="category-menu-item-icon"
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  ></div>
                  <div class="category-menu-item-title">{item.title}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
};
