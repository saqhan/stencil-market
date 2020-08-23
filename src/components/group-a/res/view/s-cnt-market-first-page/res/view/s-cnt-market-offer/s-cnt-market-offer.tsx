import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import {MarketOfferInterface} from "../../../../../../../../index";

@Component({
  tag: "s-cnt-market-offer",
  styleUrl: "s-cnt-market-offer.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOffer implements ComponentInterface {
  /**
   * Данные для компонента Offer
   */
  @Prop() forOffer: MarketOfferInterface[] = [];

  /**
   * Данные для заголовка
   */
  @Prop() offerTitleText: string;

  render() {
    return (
      <div class="offer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="offerTitle">
                <div
                  class="title"
                  innerHTML={markdown.toHTML(this.offerTitleText)}
                ></div>
              </div>
            </div>
          </div>
          <div class="row">
            <GetOfferFunctionalComponent
              arrayOffer={this.forOffer}
            ></GetOfferFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const GetOfferFunctionalComponent = (props) => {
  return props.arrayOffer.map((item) => {
    return (
      <div class="col-lg-3 col-sm-6">
        <s-cnt-market-item-offer forOffer={item}></s-cnt-market-item-offer>
      </div>
    );
  });
};
