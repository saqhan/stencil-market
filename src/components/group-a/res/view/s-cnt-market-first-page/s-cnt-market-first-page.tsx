import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-first-page',
  styleUrl: 's-cnt-market-first-page.css',
  shadow: true,
})
export class SCntMarketFirstPage implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
