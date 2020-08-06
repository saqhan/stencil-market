import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-statistics',
  styleUrl: 's-cnt-market-statistics.css',
  shadow: true,
})
export class SCntMarketStatistics implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
