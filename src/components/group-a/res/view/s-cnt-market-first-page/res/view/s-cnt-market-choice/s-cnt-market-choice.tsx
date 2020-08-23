import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketChoiceInterface} from "../../../../../../../../index";

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
        <div class="container-fluid">
          <div class="row justify-content-start">
            <div class="col-md-12">
              <div class="title">{this.choiceTitleText}</div>
            </div>
            <ItemChoiceFunctionalComponent
              array={this.forChoice}
            ></ItemChoiceFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const ItemChoiceFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <s-cnt-market-item-choice forChoice={item}></s-cnt-market-item-choice>
    );
  });
};
