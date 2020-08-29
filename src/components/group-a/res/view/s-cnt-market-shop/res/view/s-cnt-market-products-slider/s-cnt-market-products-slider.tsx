import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {MarketProductsSliderCardsInterface} from "../../../../../../../../index";

declare const Flickity: any;

@Component({
  tag: "s-cnt-market-products-slider",
  styleUrl: "s-cnt-market-products-slider.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsSlider implements ComponentInterface {

  /**
   * обертка для слайдера товара
   * */
  @Prop() theme:  'main-container' | 'cart' = 'main-container';


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
        <div class={this.getClassForHost()}>
          <div class="products-carousel-title">{this.productsSliderTitle}</div>
          <div class="products-carousel" ref={(el) => (this.carouselTag = el)}>
            <ProductsSliderCardFunctionalComponent
              array={this.productsSliderCards}
            ></ProductsSliderCardFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
  /**
   * Метод выобра
   * */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }
}

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
