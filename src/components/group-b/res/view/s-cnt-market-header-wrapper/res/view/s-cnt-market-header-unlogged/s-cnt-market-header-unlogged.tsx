import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-header-unlogged',
  styleUrl: 's-cnt-market-header-unlogged.css',
  shadow: false,
  scoped: true
})
export class SCntMarketHeaderUnlogged implements ComponentInterface {

  render() {
    return (
      <div>
        unlogged
      </div>
    );
  }

}
