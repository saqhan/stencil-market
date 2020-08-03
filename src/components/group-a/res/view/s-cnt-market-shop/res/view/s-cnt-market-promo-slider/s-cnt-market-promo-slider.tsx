import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {MarketPromoSliderInterface} from "./res/interface/common.interface";

@Component({
  tag: 's-cnt-market-promo-slider',
  styleUrl: 's-cnt-market-promo-slider.css',
  shadow: false,
  scoped: true
})
export class SCntMarketPromoSlider implements ComponentInterface {

  /**
   * Получаем данные карточек промо-слайдера
   */
  @Prop() promoSliderCards: MarketPromoSliderInterface[] = [];

  render() {
    return (
      <div class="row">
        <PromoSliderCard array={this.promoSliderCards}></PromoSliderCard>
      </div>
    );
  }

}

const PromoSliderCard = (props) => {
  return props.array.map(item => {
    return (
      <div class="col-md-4">
        <s-cnt-market-promo-slider-card promoSliderCards={item}></s-cnt-market-promo-slider-card>
      </div>
    );
  });
}
