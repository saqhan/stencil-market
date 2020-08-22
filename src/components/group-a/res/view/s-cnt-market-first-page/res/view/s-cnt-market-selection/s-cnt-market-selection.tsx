import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import {MarketSelectionInterface} from "../../../../../../../../index";

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
      <div class="header">
        <div
          class="imageHome"
          style={{ backgroundImage: "url(" + this.homePageImage + ")" }}
        ></div>
        <h1 class="homeText" innerHTML={markdown.toHTML(this.homeText)}></h1>

        <div
          class="homeSubtext"
          innerHTML={markdown.toHTML(this.homeSubText)}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <GetSelectionFunctionalComponent
              array={this.forSelection}
            ></GetSelectionFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const GetSelectionFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-md-4 col-sm-6 selection-card">
        <s-cnt-market-item-selection
          forSelection={item}
        ></s-cnt-market-item-selection>
      </div>
    );
  });
};
