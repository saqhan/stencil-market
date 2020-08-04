import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-recommended',
  styleUrl: 's-cnt-market-recommended.css',
  shadow: true,
})
export class SCntMarketRecommended implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
