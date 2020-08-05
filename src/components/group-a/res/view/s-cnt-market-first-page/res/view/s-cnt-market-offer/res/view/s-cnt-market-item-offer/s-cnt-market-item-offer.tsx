import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-item-offer',
  styleUrl: 's-cnt-market-item-offer.css',
  shadow: true,
})
export class SCntMarketItemOffer implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
