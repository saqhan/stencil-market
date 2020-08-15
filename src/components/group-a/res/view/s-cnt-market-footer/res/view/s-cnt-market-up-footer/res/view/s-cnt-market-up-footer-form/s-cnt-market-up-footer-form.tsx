import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketUpFooterFormInterface} from "../../../../../interface/common.interface";

@Component({
  tag: "s-cnt-market-up-footer-form",
  styleUrl: "s-cnt-market-up-footer-form.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketUpFooterForm implements ComponentInterface {

  @Prop() forUpFooterForm: MarketUpFooterFormInterface;

  render() {
    return (
      <div class="upFooterForm">
        <div class="number">{this.forUpFooterForm.number}</div>
        <div class="time">{this.forUpFooterForm.time}</div>
        <div class="input-block">
          <i class="far fa-comment-alt icon" />
          <div class="input">{this.forUpFooterForm.input}</div>
        </div>
        <div class="text">{this.forUpFooterForm.text}</div>
      </div>
    );
  }
}
