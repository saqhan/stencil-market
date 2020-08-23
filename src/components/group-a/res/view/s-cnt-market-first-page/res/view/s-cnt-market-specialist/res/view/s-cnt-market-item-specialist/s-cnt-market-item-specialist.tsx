import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import {MarketSpecialistInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-item-specialist",
  styleUrl: "s-cnt-market-item-specialist.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemSpecialist implements ComponentInterface {
  /**
   * Данные для компонента Specialist
   */
  @Prop() forSpecialist: MarketSpecialistInterface;

  render() {
    return (
      <div class="steps">
        <div class="commonImage">
          <div
            class="image"
            style={{
              backgroundImage: "url(" + this.forSpecialist.image + ")",
            }}
          ></div>
        </div>
        <div
          class="text"
          innerHTML={markdown.toHTML(this.forSpecialist.text)}
        ></div>
      </div>
    );
  }
}
