import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State} from "@stencil/core";
import {MarketProductListInterface, MarketProductsPageFilterInterface} from "../../../../../../../../../../../index";


@Component({
  tag: "s-cnt-market-product-filter-said-bar",
  styleUrl: "s-cnt-market-product-filter-said-bar.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductPage implements ComponentInterface {
  /**
   * Данные объекта для заполнения компонента
   */
  @Prop() productFilter: MarketProductsPageFilterInterface;

  /**
   * Данные для вывода брендов
   */
  @Prop() brands: MarketProductListInterface;

  /**
   *  checked для смены класса и показа товаров со скидкой
   */
  @Prop() checkedDesc: boolean;

  /**
   * для сравнения и вывода товаров выбранного бренда
   */
  @State() checkedSortBtn: boolean;

  /**
   * Клик для смены значения булен при выборе товаров со скидкой и без
   */
  @Event() checkDesc: EventEmitter;

  /**
   * Клик по карточке для показа модального окна
   */
  @Event() clickBrandSelect: EventEmitter<void>;

  render() {
    return (
      <nav class="sort-filter-wrap">
        <div class="filter-section-wrap">
          <div class="sort-title">
            {this.productFilter.sortTitle}
          </div>
          <div class="sort-btn-wrap">
            <div class="sort-btn-container">
              <div class={this.checkedSortBtn ? "sort-button" : "sort-button selected"}
                   onClick={() => this.checkSortPopularBtn()}
              >
                {this.productFilter.sortFirstBtn}
              </div>
              <div class={this.checkedSortBtn ? "sort-button selected" : "sort-button"}
                   onClick={() => this.checkSortPriceBtn()}
              >
                {this.productFilter.sortSecondBtn}
              </div>
            </div>
          </div>
        </div>
        <div class="filter-section-wrap">
          <div>
            <label class="filter-section-check-wrap">
              <div class="filter-section-check-container">
                <div class="filter-section-check">
                  <div class={this.checkedDesc ? 'disc-checked' : 'disc-check'} onClick={() => this.checkDesc.emit()}>
                    <i class={this.productFilter.sortDescIcon}></i>
                  </div>
                </div>
                <div class="filter-section-check-text">
                  <div>
                    {this.productFilter.sortDescText}
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div class="filter-section-wrap">
          <div class="filter-header">
            {this.productFilter.brandTitle}
          </div>
          <div class="filter-items">
            <div class="filter-item-title" onClick={() => this.clickBrandSelect.emit()}>
              {this.productFilter.brandAllBtn}
            </div>
            <ProductsBrandItemFunctionalComponent
              array={this.brands.card}
              clickBrandSelect={(x) => this.clickBrandSelect.emit(x)}
            ></ProductsBrandItemFunctionalComponent>
          </div>
        </div>
      </nav>
    );
  }

  /**
   * функция присвоения значения при выборе товоров при нажатии первой кнопки сортировки
   */
  public checkSortPopularBtn() {
    this.checkedSortBtn = false;
  }

  /**
   * функция присвоения значения при выборе товоров при нажатии второй кнопки сортировки
   */
  public checkSortPriceBtn() {
    this.checkedSortBtn = true;
  }

}

/**
 * Компонентная функция вывода брендов
 */
const ProductsBrandItemFunctionalComponent = (props) => {
  const brands = [];
  const brandsLength = [];
  props.array.forEach((item) => {
    let brand = item.productData.getSpecification.BrandName;

    brandsLength.push(brand);

    const allBrands = () => {
      if (brands.indexOf(brand) === -1) {
        brands.push(brand);
      }
    };

    allBrands();
  });

  return brands.map(item => {
    let quantityProd = [];
    brandsLength.map((len) => {
      if (len === item) {
        quantityProd.push(item)
      }
    })
    return (
      <div class="brand-item-wrap">
        <div class="filter-item" onClick={() => props.clickBrandSelect(item)}>
          {item}
        </div>
        <div class="product-quantity">
          {quantityProd.length}
        </div>
      </div>

    );
  })

};


