import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-header-wrapper',
  styleUrl: 's-cnt-market-header-wrapper.css',
  shadow: false,
  scoped: true
})
export class SCntMarketHeaderWrapper implements ComponentInterface {

  render() {
    return (
      <div>
        <s-cnt-market-header-unlogged></s-cnt-market-header-unlogged>
      </div>
    );
  }

}
