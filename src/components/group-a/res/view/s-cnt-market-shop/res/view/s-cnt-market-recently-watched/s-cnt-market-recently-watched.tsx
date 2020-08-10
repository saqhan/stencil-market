import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-recently-watched',
  styleUrl: 's-cnt-market-recently-watched.css',
  shadow: false,
  scoped: true
})
export class SCntMarketRecentlyWatched implements ComponentInterface {
  /**
   * Данные карточек слайдера просмотренных товаров
   */
  @Prop() recentlyWatchedProducts: any;

  /**
   * Заголовк раздела
   */
  @Prop() recentlyWatchedTitle: string;

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
      <div class="recently-watched products">
        <div class="products-carousel-title">{this.recentlyWatchedTitle}</div>
        <div class="products-carousel" ref={(el) => (this.carouselTag = el)}>
          <RecentlyWatchedSlider
            array={this.recentlyWatchedProducts}
          ></RecentlyWatchedSlider>
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
