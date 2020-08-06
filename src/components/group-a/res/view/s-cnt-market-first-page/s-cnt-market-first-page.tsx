import { Component, ComponentInterface, h } from "@stencil/core";
import {
  forOffer,
  forSelection,
  homePageImage,
  homeSubText,
  homeText,
  offerTitleText,
} from "../../../../../utils/mock-a";

@Component({
  tag: "s-cnt-market-first-page",
  styleUrl: "s-cnt-market-first-page.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketFirstPage implements ComponentInterface {
  render() {
    return (
      <div>
        <s-cnt-market-selection
          forSelection={forSelection}
          homePageImage={homePageImage}
          homeText={homeText}
          homeSubText={homeSubText}
        ></s-cnt-market-selection>
        <s-cnt-market-offer
          forOffer={forOffer}
          offerTitleText={offerTitleText}
        ></s-cnt-market-offer>
      </div>
    );
  }
}
