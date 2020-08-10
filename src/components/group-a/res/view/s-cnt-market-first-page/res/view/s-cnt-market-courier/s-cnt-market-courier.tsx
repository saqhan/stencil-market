import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import {MarketCourierInterface} from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-courier",
  styleUrl: "s-cnt-market-courier.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketCourier implements ComponentInterface {
  /**
   * Данные для компонента Choice
   */
  @Prop() forCourier: MarketCourierInterface[] = [];

  render() {
    return (
      <div class="choice">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="commonImage">
                <div
                  class="image"
                  style={{
                    backgroundImage: "url(" + this.forCourier[0].image + ")",
                  }}
                >
                  <div class="number">{this.forCourier[0].number}</div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div
                class="text"
                innerHTML={markdown.toHTML(this.forCourier[0].text)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
