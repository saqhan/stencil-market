import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-promo-slider',
  styleUrl: 's-cnt-market-promo-slider.css',
  shadow: true,
})
export class SCntMarketPromoSlider implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
