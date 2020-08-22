import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {footerItemsInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-footer-items",
  styleUrl: "s-cnt-market-footer-items.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketFooterItems implements ComponentInterface {
  /**
   * элементы списка меню
   * */
  @Prop() footerItems: footerItemsInterface;

  render() {
    return <div class="item-li">{this.footerItems.title}</div>;
  }
}
