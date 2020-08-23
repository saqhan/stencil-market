import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import { markdown } from "markdown";
import {MarketChoiceInterface, MarketSpecialistInterface} from "../../../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-item-choice',
  styleUrl: 's-cnt-market-item-choice.css',
  shadow: false,
  scoped: true
})
export class SCntMarketItemChoice implements ComponentInterface {

  /**
   * Данные для компонента Choice
   */
  @Prop() forChoice: MarketChoiceInterface;
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
              backgroundImage: "url(" + this.forChoice.image + ")",
            }}
          >
          </div>
        </div>
        <div
          class="text"
          innerHTML={markdown.toHTML(this.forChoice.text)}
        ></div>
      </div>
    );
  }

}
