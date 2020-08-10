import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketProductsSliderCardsInterface } from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-products-slider",
  styleUrl: "s-cnt-market-products-slider.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsSlider implements ComponentInterface {
  /**
   * Данные карточек слайдера популярных продуктов
   */
  @Prop() productsSliderCards: MarketProductsSliderCardsInterface[] = [];

  /**
   * Заголовк слайдера
   */
  @Prop() productsSliderTitle: string;

  /**
   *
   */
  public carouselTag: HTMLElement;

  componentDidLoad() {
    const elem = this.carouselTag;
    // @ts-ignore
    const flkty = new Flickity(elem, {
      // options
      freeScroll: true,
      contain: true,
      pageDots: false,
      draggable: false,
    });
  }

  render() {
    return (
      <div class="products">
        <div class="products-carousel-title">{this.productsSliderTitle}</div>
        <div class="products-carousel" ref={(el) => (this.carouselTag = el)}>
          <ProductsSliderCard
            array={this.productsSliderCards}
          ></ProductsSliderCard>
        </div>
      </div>
    );
  }
}

const ProductsSliderCard = (props) => {
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
