import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {footerLinksPoliticsInterface} from "../../../../../interface/common.interface";

@Component({
  tag: 's-cnt-market-footer-info-item',
  styleUrl: 's-cnt-market-footer-info-item.css',
  shadow: false,
  scoped: true
})
export class SCntMarketFooterInfoItem implements ComponentInterface {

  /**
   * Данные для политики безопасности
   * */
  @Prop() footerLinksPolitics: footerLinksPoliticsInterface

  render() {
    return (
      <div class="text">
        {this.footerLinksPolitics.title}
      </div>
    );
  }

}
