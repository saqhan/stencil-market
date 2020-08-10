import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-app',
  styleUrl: 's-cnt-market-app.css',
  shadow: true,
})
export class SCntMarketApp implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
