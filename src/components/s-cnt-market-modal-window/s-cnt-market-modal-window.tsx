import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-modal-window',
  styleUrl: 's-cnt-market-modal-window.css',
  shadow: true,
})
export class SCntMarketModalWindow implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
