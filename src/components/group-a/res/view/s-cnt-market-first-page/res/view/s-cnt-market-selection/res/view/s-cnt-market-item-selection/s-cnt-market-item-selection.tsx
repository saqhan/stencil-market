import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketSelectionInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-item-selection",
  styleUrl: "s-cnt-market-item-selection.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemSelection implements ComponentInterface {
  /**
   * Данные для карточек магазинов
   */
  @Prop() forSelection: MarketSelectionInterface;

  render() {
    return (
      <div class="common">
        <div class="image">
          <div
            class="img"
            style={{ backgroundImage: "url(" + this.forSelection.image + ")" }}
          ></div>
        </div>
        <div class="commonText">
          <div class="title">{this.forSelection.title}</div>
          <div class="text">{this.forSelection.text}</div>
        </div>
      </div>
    );
  }
}
