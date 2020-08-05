import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-products-slider',
  styleUrl: 's-cnt-market-products-slider.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductsSlider implements ComponentInterface {
  /**
   * Получаем данные карточек слайдера популярных продуктов
   */
  @Prop() productsSliderCards: any;

  render() {
    return (
      <div class="products">
        <div class="products-carousel-title">
          Популярные товары
        </div>
          <ul class="products-carousel">
            <ProductsSliderCard array={this.productsSliderCards}></ProductsSliderCard>
          </ul>
      </div>
    );
  }

}

const ProductsSliderCard = (props) => {
  return props.array.map((item) => {
    return (
      <li class="carousel-cell">
        <s-cnt-market-prroducts-slider-card
          productsSliderCards={item}
        ></s-cnt-market-prroducts-slider-card>
      </li>
    );
  });
};
