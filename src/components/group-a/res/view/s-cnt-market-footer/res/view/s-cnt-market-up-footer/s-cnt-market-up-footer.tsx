import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {footerMenuInterface} from "../../../../../../../../index";

@Component({
  tag: 's-cnt-market-up-footer',
  styleUrl: 's-cnt-market-up-footer.css',
  shadow: false,
  scoped: true
})
export class SCntMarketUpFooter implements ComponentInterface {

  /**
   * Данные для элементов меню в подвале
   * */
  @Prop() footerMenu: footerMenuInterface;

  render() {
    return (
      <div class="my-block">
        <div class="sberMarket">
          {this.footerMenu.title}
        </div>
        <FooterItems array={this.footerMenu.menuItems}/>
      </div>
    );
  }

}

//HOC для элементов меню
const FooterItems = (props) => {
  return props.array.map((item) => {
    return (
        <s-cnt-market-footer-items footerItems={item} />
    )
  })
}
