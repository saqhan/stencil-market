import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import { MarketSpecialistInterface } from "./res/interface/common.interface";
@Component({
  tag: "s-cnt-market-specialist",
  styleUrl: "s-cnt-market-specialist.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketSpecialist implements ComponentInterface {
  /**
   * Данные для компонента Specialist
   */
  @Prop() forSpecialist: MarketSpecialistInterface[] = [];

  render() {
    return (
      <div class="choice">
        <div class="container">
          <div class="row justify-content-center no-gutters">
            <div class="col-md-4">
              <div class="commonImage">
                <div
                  class="image"
                  style={{
                    backgroundImage: "url(" + this.forSpecialist[0].image + ")",
                  }}
                >
                  <div class="number">{this.forSpecialist[0].number}</div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div
                class="text"
                innerHTML={markdown.toHTML(this.forSpecialist[0].text)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
