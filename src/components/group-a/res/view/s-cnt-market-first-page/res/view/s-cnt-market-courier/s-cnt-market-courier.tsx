import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketCourierInterface} from "../../../../../../../../index";

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
      <div class="courier">
        <div class="container-fluid">
          <div class="row justify-content-start">
            <ItemCourierFunctionalComponent
              array={this.forCourier}
            ></ItemCourierFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const ItemCourierFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <s-cnt-market-item-courier forCourier={item}></s-cnt-market-item-courier>
    );
  });
};
