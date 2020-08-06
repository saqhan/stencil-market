import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import {MarketOfferInterface} from "../../interface/common.interface";

@Component({
  tag: "s-cnt-market-item-offer",
  styleUrl: "s-cnt-market-item-offer.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemOffer implements ComponentInterface {
  /**
   * Данные для компонента Item Offer
   */
  @Prop() forOffer: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() MarketOfferInterface: MarketOfferInterface[] = [];

  render() {
    return (
      <div class="commonOffer">
        <div class="icons">
          <i class={this.forOffer.icon}/>
        </div>
        <div class="text" innerHTML={markdown.toHTML(this.forOffer.text)}>

        </div>
      </div>
    );
  }
}
