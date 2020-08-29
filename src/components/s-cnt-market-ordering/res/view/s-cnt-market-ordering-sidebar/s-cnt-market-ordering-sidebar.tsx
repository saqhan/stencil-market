import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-ordering-sidebar',
  styleUrl: 's-cnt-market-ordering-sidebar.css',
  shadow: true,
})
export class SCntMarketOrderingSidebar implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
