import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {MarketFooterMenuInterface} from "../../interface/common.interface";

@Component({
  tag: 's-cnt-market-up-footer',
  styleUrl: 's-cnt-market-up-footer.css',
  shadow: false,
  scoped: true
})
export class SCntMarketUpFooter implements ComponentInterface {

  @Prop() footerMenu: MarketFooterMenuInterface;

  render() {
    return (
      <div class="my-block">
        <div class="sberMarket">
          {this.footerMenu.title}
        </div>
        <FooterItems array={this.footerMenu.items}/>
      </div>
    );
  }

}

const FooterItems = (props) => {
  return props.array.map((item) => {
    return (
        <s-cnt-market-footer-items footerItems={item} />
    )
  })
}
