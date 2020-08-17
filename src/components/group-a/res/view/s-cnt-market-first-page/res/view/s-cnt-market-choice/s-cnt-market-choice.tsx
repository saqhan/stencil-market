import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import { MarketChoiceInterface } from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-choice",
  styleUrl: "s-cnt-market-choice.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketChoice implements ComponentInterface {
  /**
   * Данные для компонента Choice
   */
  @Prop() forChoice: MarketChoiceInterface[] = [];

  /**
   * Данные для заголовка
   */
  @Prop() choiceTitleText: string;

  render() {
    return (
      <div class="choice">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">{this.choiceTitleText}</div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="commonImage">
                <div
                  class="image"
                  style={{
                    backgroundImage: "url(" + this.forChoice[0].image + ")",
                  }}
                >
                  <div class="number">{this.forChoice[0].number}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-12">
              <div
                class="text"
                innerHTML={markdown.toHTML(this.forChoice[0].text)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
