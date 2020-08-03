import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-selection',
  styleUrl: 's-cnt-market-selection.css',
  shadow: true,
})
export class SCntMarketSelection implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
