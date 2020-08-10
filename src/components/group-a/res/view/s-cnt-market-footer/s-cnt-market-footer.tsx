import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-footer',
  styleUrl: 's-cnt-market-footer.css',
  shadow: false,
  scoped: true
})
export class SCntMarketFooter implements ComponentInterface {

  render() {
    return (
      <div>
        <s-cnt-market-up-footer/>
      </div>
    );
  }

}
