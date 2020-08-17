import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import { MarketRecentlyWatchedProductsInterface } from "./res/interface/common.interface";

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
    // @ts-ignore
    const flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      pageDots: false,
      draggable: false,
      percentPosition: false,
    });
  }

  render() {
    return (
      <div class="recently-watched products">
        <div class="main-container">
          <div class="products-carousel-title">{this.recentlyWatchedTitle}</div>
          <div class="products-carousel" ref={(el) => (this.carouselTag = el)}>
            <RecentlyWatchedSlider
              array={this.recentlyWatchedProducts}
            ></RecentlyWatchedSlider>
          </div>
        </div>
      </div>
    );
  }
}

const RecentlyWatchedSlider = (props) => {
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
