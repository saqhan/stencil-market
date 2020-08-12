import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-delivery',
  styleUrl: 's-cnt-market-delivery.css',
  shadow: true,
})
export class SCntMarketDelivery implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
