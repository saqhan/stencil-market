import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketCitiesInterface} from "../../../../../../../../../../index";

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
  @Prop() delivery: MarketCitiesInterface;

  render() {
    return <span>{this.delivery.name}</span>;
  }
}
