import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketCityNameInterface } from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-delivery-item",
  styleUrl: "s-cnt-market-delivery-item.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketDeliveryItem implements ComponentInterface {
  /**
   * Список городов
   */
  @Prop() delivery: MarketCityNameInterface;

  render() {
    return <span>{this.delivery.name}</span>;
  }
}