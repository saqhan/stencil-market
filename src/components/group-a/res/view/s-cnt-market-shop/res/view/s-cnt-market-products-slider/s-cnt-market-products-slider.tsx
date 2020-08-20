import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import { MarketProductsSliderCardsInterface } from "./res/interface/common.interface";

declare const Flickity: any;

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
   * Клик по карточке для показа модального окна
   */
  @Event() showModal: EventEmitter<void>;

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
      <div class="products">
        <div class="main-container">
          <div class="products-carousel-title">{this.productsSliderTitle}</div>
          <div class="products-carousel" ref={(el) => (this.carouselTag = el)}>
            <ProductsSliderCard
              array={this.productsSliderCards}
            ></ProductsSliderCard>
          </div>
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
