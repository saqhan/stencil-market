import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-products-list',
  styleUrl: 's-cnt-market-products-list.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductsList implements ComponentInterface {

  render() {
    return (
      <div class="products-lit">
        <div class="products-list-row">

        </div>
      </div>
    );
  }
}

