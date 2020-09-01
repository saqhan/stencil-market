import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State} from "@stencil/core";
import {
  MarketProductListInterface,
  MarketProductPageInterface,
  MarketProductsSliderCardsInterface
} from "../../../../../../../../index";

declare const Flickity: any;

@Component({
  tag: "s-cnt-market-product-page",
  styleUrl: "s-cnt-market-product-page.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductPage implements ComponentInterface {
  /**
   * Данные объекта для заполнения компонента
   */
  @Prop() productsPage: MarketProductPageInterface;

  /**
   * Данные для списка товаров
   */
  @Prop() productsList: MarketProductListInterface[];

  /**
   * Данные карточек слайдера популярных продуктов
   */
  @Prop() productsSliderCards: MarketProductsSliderCardsInterface[] = [];

  /**
   * Принимает id выбранной категории для вывода ее товаров
   */
  @Prop() selectedCategoryId: number;

  /**
   * Заголовк слайдера
   */
  @Prop() productsSliderTitle: string;

  /**
   * checked для смены класса и показа товаров со скидкой
   */
  @State() checkedDesc: boolean;

  /**
   * для сравнения и вывода товаров выбранного бренда
   */
  @State() selectedBrand: string;

  /**
   * Клик по карточке для показа модального окна
   */
  @Event() showModal: EventEmitter;

  /**
   *
   */
  public carouselTag: HTMLElement;

  componentDidLoad() {
    let elem = this.carouselTag;

    new Flickity(elem, {
      cellAlign: 'left',
      pageDots: false,
      freeScroll: true,
      draggable: false,
      wrapAround: true,
      percentPosition: false,
    });
  }

  render() {
    return (
      <section class="product-page-body">
        <div class="product-page-nav-wrapper">
          <div class="product-page-nav-container">
            <div class="product-page-nav-title-wrap">
              <div class="product-page-nav-title">
                <div class="info">
                  <span class="category">
                    {this.productsPage.categoryName}
                  </span>
                  <span class="slogan">
                    {this.productsPage.slogan}
                  </span>
                </div>
                <h1>
                  <TitleFunctionalComponent
                  array={this.productsList}
                  selectedCategoryId={this.selectedCategoryId}
                  ></TitleFunctionalComponent>
                </h1>
                <div class="selected-category-all-wrapper">
                  <div class="selected-category-all-btn" onClick={() => this.clickBrandSelect(undefined)}>
                    {this.productsPage.allBrandBtn}
                  </div>
                </div>
              </div>
            </div>
            <div class="product-page-content-wrapper">
              <div class="product-page-content-parent">
                <div class="product-page-filter-container">
                  <aside>
                    {/**
                     *Компонентная функция вывода фильтра
                     */}
                    {this.ProductsForFilterFunctionalComponent()}
                  </aside>
                </div>
                <div class="product-page-content-container">
                  <div class="products">
                    <div class="main-container">
                      <div class="products-carousel-title">{this.productsSliderTitle}</div>
                      <div class="products-carousel" ref={(el) => (this.carouselTag = el)}>
                        <ProductsSliderCardFunctionalComponent
                          array={this.productsSliderCards}
                        ></ProductsSliderCardFunctionalComponent>
                      </div>
                    </div>
                  </div>
                  <ul class="product-wrapper">
                    <ProductsListItemFunctionalComponent
                      array={this.productsList}
                      selectedCategoryId={this.selectedCategoryId}
                      selectedBrand={this.selectedBrand}
                      checkedDesc={this.checkedDesc}
                    ></ProductsListItemFunctionalComponent>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  public checkDesc() {
    this.checkedDesc = !this.checkedDesc
  }

  /**
   * Компонентная функция вывода фильтра
   */
  public ProductsForFilterFunctionalComponent() {
    return this.productsList.map((item) => {
      if (this.selectedCategoryId === item.id) {
        return (
          <s-cnt-market-product-filter-said-bar
            brands={item}
            checkedDesc={this.checkedDesc}
            productFilter={this.productsPage.productsPageFilter}
            onCheckDesc={() => this.checkDesc()}
            onClickBrandSelect={(x) => this.clickBrandSelect(x)}
          >
          </s-cnt-market-product-filter-said-bar>
        );
      }
    });
  };

  /**
   * функция для присвоения значения выбранного бренда
   */
  public clickBrandSelect({detail}) {
    this.selectedBrand = detail;
  }

}

/**
 * компонентная функция для вывода Заголовка выбранной категории
 */
const TitleFunctionalComponent= (props) => {
  return props.array.map((item) => {
    if (props.selectedCategoryId === item.id) {
      return (
        <span>
          {item.header.title}
        </span>
      );
    }
  })
}

/**
 * Компонентная функция вывода слайдера
 */
const ProductsSliderCardFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div class="carousel-cell">
        <s-cnt-market-products-slider-card
          productsSliderCards={item}
        ></s-cnt-market-products-slider-card>
      </div>
    );
  });
};

/**
 * Компонентная функция вывода продуктов
 */
const ProductsListItemFunctionalComponent = (props) => {
  /**
   * Если значение бренд совпадает (let brandName = i.productData.getSpecification.BrandName;) со значением выбранного бренда в компоненте фильтра(сайдБар фильтр)
   * (props.selectedBrand) и значения не undefined и "" пустое значение то вывести из массива объекты с таким брендом, иначе вывести все товары,
   * также если была активирована кнопка товары с скидкой (props.checkedDesc) то вывести товары только с скидкой.
   */
  return props.array.map((item) => {
    if (props.selectedCategoryId === item.id) {
      return item.card.map((i) => {
          let brandName = i.productData.getSpecification.BrandName;
          if (props.selectedBrand === brandName && props.selectedBrand != undefined && props.selectedBrand != '') {
            if (props.checkedDesc === true) {
              if (i.disPrice) {
                return (
                  <li class="product-list-card">
                    <s-cnt-market-products-list-item
                      productsListCard={i}
                    ></s-cnt-market-products-list-item>
                  </li>
                );
              }
            } else {
              return (
                <li class="product-list-card">
                  <s-cnt-market-products-list-item
                    productsListCard={i}
                  ></s-cnt-market-products-list-item>
                </li>
              );
            }
          } else if (props.selectedBrand === undefined || props.selectedBrand === '' || props.selectedBrand === null) {
            if (props.checkedDesc === true) {
              if (i.disPrice) {
                return (
                  <li class="product-list-card">
                    <s-cnt-market-products-list-item
                      productsListCard={i}
                    ></s-cnt-market-products-list-item>
                  </li>
                );
              }
            } else {
              return (
                <li class="product-list-card">
                  <s-cnt-market-products-list-item
                    productsListCard={i}
                  ></s-cnt-market-products-list-item>
                </li>
              );
            }
          }
        }
      )
    }
  });
};
