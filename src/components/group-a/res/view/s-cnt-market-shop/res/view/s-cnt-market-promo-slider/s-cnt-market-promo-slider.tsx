import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketPromoSliderInterface } from "./res/interface/common.interface";

declare const Flickity: any;

@Component({
  tag: "s-cnt-market-promo-slider",
  styleUrl: "s-cnt-market-promo-slider.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketPromoSlider implements ComponentInterface {
  /**
   * Получаем данные карточек промо-слайдера
   */
  @Prop() promoSliderCards: MarketPromoSliderInterface[] = [];

  /**
   *
   */
  public promoCarouselTag: HTMLElement;

  componentDidLoad() {
    const elem = this.promoCarouselTag;

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
      <div class="main-carousel" ref={(el) => this.promoCarouselTag = el}>
        <PromoSliderCardFunctionalComponent array={this.promoSliderCards}></PromoSliderCardFunctionalComponent>
      </div>
    );
  }
}

const PromoSliderCardFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div class="carousel-cell">
        <s-cnt-market-promo-slider-card
          promoSliderCards={item}
        ></s-cnt-market-promo-slider-card>
      </div>
    );
  });
};
