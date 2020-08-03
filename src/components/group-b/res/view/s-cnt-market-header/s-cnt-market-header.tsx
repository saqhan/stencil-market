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
      <div class="col-12" >
        <s-cnt-market-top-bar></s-cnt-market-top-bar>
        <s-cnt-market-header-body></s-cnt-market-header-body>
        <s-cnt-market-header-nav></s-cnt-market-header-nav>
      </div>
    );
  }

}
