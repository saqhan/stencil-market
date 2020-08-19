import { Component, ComponentInterface, h } from "@stencil/core";
import {
  choiceTitleText,
  forOffer,
  forSelection,
  forStatistics,
  forChoice,
  homePageImage,
  homeSubText,
  homeText,
  offerTitleText,
  forSpecialist,
  forCourier, forApp, delivery,
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
      <main>
        <s-cnt-market-selection
          forSelection={forSelection}
          homePageImage={homePageImage}
          homeText={homeText}
          homeSubText={homeSubText}
        >
        </s-cnt-market-selection>
        <s-cnt-market-offer
          forOffer={forOffer}
          offerTitleText={offerTitleText}
        >
        </s-cnt-market-offer>
        <s-cnt-market-statistics
          forStatistics={forStatistics}
        >
        </s-cnt-market-statistics>
        <s-cnt-market-delivery
          delivery={delivery}
        >
        </s-cnt-market-delivery>
        <s-cnt-market-choice
          forChoice={forChoice}
          choiceTitleText={choiceTitleText}
        >
        </s-cnt-market-choice>
        <s-cnt-market-specialist
          forSpecialist={forSpecialist}
        >
        </s-cnt-market-specialist>
        <s-cnt-market-courier forCourier={forCourier}>
        </s-cnt-market-courier>
        <s-cnt-market-app forApp={forApp}>
        </s-cnt-market-app>
      </main>
    );
  }
}
