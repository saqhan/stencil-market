import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import {MarketCourierInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-item-courier",
  styleUrl: "s-cnt-market-item-courier.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemCourier implements ComponentInterface {
  /**
   * Данные для компонента Choice
   */
  @Prop() forCourier: MarketCourierInterface;

  render() {
    return (
      <div class="steps">
        <div class="commonImage">
          <div
            class="image"
            style={{
              backgroundImage: "url(" + this.forCourier.image + ")",
            }}
          ></div>
        </div>
        <div
            class="text"
            innerHTML={markdown.toHTML(this.forCourier.text)}
          ></div>
      </div>
    );
  }
}
