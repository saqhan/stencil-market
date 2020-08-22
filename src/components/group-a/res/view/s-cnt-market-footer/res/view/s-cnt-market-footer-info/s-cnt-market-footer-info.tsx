import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {footerLinksPoliticsInterface} from "../../../../../../../../index";

@Component({
  tag: 's-cnt-market-footer-info',
  styleUrl: 's-cnt-market-footer-info.css',
  shadow: false,
  scoped: true
})
export class SCntMarketFooterInfo implements ComponentInterface {

  /**
   * Данные для вывода в блок
   * */
  @Prop() footerLinksPolitics: footerLinksPoliticsInterface;

  render() {
    return (
      <div class="footerInfo">
        <div class="container">
          <div class="row justify-content-center">
            <FooterInfoItem array={this.footerLinksPolitics}/>
          </div>
        </div>
      </div>
    );
  }

}

const FooterInfoItem = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-auto">
        <s-cnt-market-footer-info-item footerLinksPolitics={item} />
      </div>
    )
  })
}
