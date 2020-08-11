import { Component, ComponentInterface, h } from '@stencil/core';
import {forFooter} from "../../../../../utils/mock-a";

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
        <s-cnt-market-up-footer
        forUpFooter={forFooter.forUpFooter}
        forUpFooterForm={forFooter.forUpFooterForm}
        logo={forFooter.logo}/>
        <s-cnt-market-down-footer
        forDownFooter={forFooter.forDownFooter}/>
        <s-cnt-market-footer-info
        forFooterInfo={forFooter.forFooterInfo}/>
      </div>
    );
  }

}
