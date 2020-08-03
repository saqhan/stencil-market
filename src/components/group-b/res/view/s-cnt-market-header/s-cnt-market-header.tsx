import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-header',
  styleUrl: 's-cnt-market-header.css',
  shadow: false,
  scoped: true
})
export class SCntMarketHeader implements ComponentInterface {

  render() {
    return (
      <div>header</div>
    );
  }

}
