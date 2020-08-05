import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketSelectionInterface} from "./res/interface/common.interface";

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
  @Prop() forSelection: any;

  /**
   * Данные для главной картинки
   */
  @Prop() homePageImage: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() MarketSelectionInterface: MarketSelectionInterface[] = []


  render() {
    return (
      <div class="selection">
        <div class="imageHome" style={{ backgroundImage: "url(" + this.homePageImage + ")" }}>
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
