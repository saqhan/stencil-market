import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketCourierInterface } from "./res/interface/common.interface";

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
            <ItemCourier array={this.forCourier}></ItemCourier>
          </div>
        </div>
      </div>
    );
  }
}

const ItemCourier = (props) => {
  return props.array.map((item) => {
    return (
      <s-cnt-market-item-courier forCourier={item}></s-cnt-market-item-courier>
    );
  });
};
