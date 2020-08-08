import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketSelectionInterface } from "./res/interface/common.interface";
import { markdown } from "markdown";

@Component({
  tag: "s-cnt-market-selection",
  styleUrl: "s-cnt-market-selection.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketSelection implements ComponentInterface {
  /**
   * Данные для карточек магазинов
   */
  @Prop() forSelection: MarketSelectionInterface[] = [];

  /**
   * Данные для главной картинки
   */
  @Prop() homePageImage: string;

  /**
   * Данные для заголовка на картинке
   */
  @Prop() homeText: string;

  /**
   * Данные для подзаголовка на картинке
   */
  @Prop() homeSubText: string;

  render() {
    return (
      <div class="selection">
        <div
          class="imageHome"
          style={{ backgroundImage: "url(" + this.homePageImage + ")" }}
        >
          <div class="commonText">
            <div class="text" innerHTML={markdown.toHTML(this.homeText)}></div>
            <div
              class="subtext"
              innerHTML={markdown.toHTML(this.homeSubText)}
            ></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <GetSelection array={this.forSelection}></GetSelection>
          </div>
        </div>
      </div>
    );
  }
}

const GetSelection = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-md-4">
        <s-cnt-market-item-selection
          forSelection={item}
        ></s-cnt-market-item-selection>
      </div>
    );
  });
};
