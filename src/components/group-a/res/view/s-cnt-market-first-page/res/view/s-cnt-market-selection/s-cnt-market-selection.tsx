import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-selection',
  styleUrl: 's-cnt-market-selection.css',
  shadow: false,
  scoped: true,
})
export class SCntMarketSelection implements ComponentInterface {

  @Prop() payload: any;

  render() {
    return (
      <s-cnt-market-item-selection payload={this.payload}/>
    );
  }

}
