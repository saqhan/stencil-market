import {Component, ComponentInterface, h} from '@stencil/core';
import {forSelection} from "../../../../../utils/mock-a";

@Component({
  tag: 's-cnt-market-first-page',
  styleUrl: 's-cnt-market-first-page.css',
  shadow: false,
  scoped: true,
})
export class SCntMarketFirstPage implements ComponentInterface {

  render() {
    return (
    <s-cnt-market-selection payload={forSelection}/>
    );
  }

}
