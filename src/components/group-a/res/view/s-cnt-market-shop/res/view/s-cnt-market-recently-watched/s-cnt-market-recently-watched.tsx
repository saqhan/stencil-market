import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {MarketRecentlyWatchedProductsInterface} from "../../../../../../../../index";

declare const Flickity: any;

@Component({
  tag: "s-cnt-market-recently-watched",
  styleUrl: "s-cnt-market-recently-watched.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketRecentlyWatched implements ComponentInterface {
  /**
   * Данные карточек слайдера просмотренных товаров
   */
  @Prop()
  recentlyWatchedProducts: MarketRecentlyWatchedProductsInterface[] = [];

  /**
   * Заголовк раздела
   */
  @Prop() recentlyWatchedTitle: string;

  /**
   * Клик по карточке для показа модального окна
   */
  @Event() showModal: EventEmitter<void>;

  /**
   *
   */
  public carouselTag: HTMLElement;

  componentDidLoad() {
    const elem = this.carouselTag;

    new Flickity(elem, {
      cellAlign: "left",
      pageDots: false,
      freeScroll: true,
      draggable: false,
      wrapAround: true,
      percentPosition: false,
    });
  }

  render() {
    return (
      <div class="recently-watched products">
        <div class="main-container">
          <div class="products-carousel-title">{this.recentlyWatchedTitle}</div>
          <div class="products-carousel" ref={(el) => (this.carouselTag = el)}>
            <RecentlyWatchedSliderFunctionalComponent
              array={this.recentlyWatchedProducts}
            ></RecentlyWatchedSliderFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const RecentlyWatchedSliderFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div class="carousel-cell">
        <s-cnt-market-recently-watched-card
          recentlyWatchedProducts={item}
        ></s-cnt-market-recently-watched-card>
      </div>
    );
  });
};
