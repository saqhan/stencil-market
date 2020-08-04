import { Component, ComponentInterface, h } from '@stencil/core';
// import {getProduct} from 'utils/mock.ts';

@Component({
  tag: 's-cnt-market-modal-window',
  styleUrl: 's-cnt-market-modal-window.css',
  shadow: false,
  scoped: true
})
export class SCntMarketModalWindow implements ComponentInterface {

  render() {
    return (
      <div>
        <s-cnt-market-product />
      </div>
    );
  }

}
