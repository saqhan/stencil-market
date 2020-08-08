import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-choice',
  styleUrl: 's-cnt-market-choice.css',
  shadow: true,
})
export class SCntMarketChoice implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
