import { Component, ComponentInterface, h } from '@stencil/core';
import {promoSliderCards} from "../../../../../utils/mock-a";

@Component({
  tag: 's-cnt-market-shop',
  styleUrl: 's-cnt-market-shop.css',
  shadow: false,
  scoped: true
})
export class SCntMarketShop implements ComponentInterface {

  render() {
    return (
      <main>
        <div class="container">
          <s-cnt-market-promo-slider promoSliderCards={promoSliderCards}></s-cnt-market-promo-slider>
        </div>
      </main>
    );
  }

}
