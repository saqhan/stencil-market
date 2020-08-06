import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-products-list-card',
  styleUrl: 's-cnt-market-products-list-card.css',
  shadow: true,
})
export class SCntMarketProductsListCard implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
