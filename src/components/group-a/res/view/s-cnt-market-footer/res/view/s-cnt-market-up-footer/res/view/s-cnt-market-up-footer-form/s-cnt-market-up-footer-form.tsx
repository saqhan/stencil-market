import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {footerContactColumnInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-up-footer-form",
  styleUrl: "s-cnt-market-up-footer-form.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketUpFooterForm implements ComponentInterface {

  /**
   * Контактные данные для 4 колонки в футере
   * */
  @Prop() footerContactColumn: footerContactColumnInterface;

  render() {
    return (
      <div class="upFooterForm">
        <div class="number">{this.footerContactColumn.number}</div>
        <div class="time">{this.footerContactColumn.time}</div>
        <div class="input-block">
          <i class="far fa-comment-alt icon" />
          <div class="input">{this.footerContactColumn.input}</div>
        </div>
        <div class="text">{this.footerContactColumn.text}</div>
      </div>
    );
  }
}
