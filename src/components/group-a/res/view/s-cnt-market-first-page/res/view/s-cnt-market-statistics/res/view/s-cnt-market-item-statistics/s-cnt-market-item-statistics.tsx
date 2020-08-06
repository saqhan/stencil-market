import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-item-statistics',
  styleUrl: 's-cnt-market-item-statistics.css',
  shadow: true,
})
export class SCntMarketItemStatistics implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
