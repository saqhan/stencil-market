import { Component, ComponentInterface, h } from "@stencil/core";
import {getProduct, getRecommended, getSpecification, info} from "../../../../../utils/mock-a";

@Component({
  tag: "s-cnt-market-modal-window",
  styleUrl: "s-cnt-market-modal-window.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketModalWindow implements ComponentInterface {
  render() {
    return (
      <div class="window">
        <div class="container">
          <s-cnt-market-product
            getProduct={getProduct}>
          </s-cnt-market-product>
          <s-cnt-market-recommended
            getRecommended={getRecommended}
            info={info}>
          </s-cnt-market-recommended>
          <s-cnt-market-specification
            getSpecification={getSpecification}>
          </s-cnt-market-specification>
        </div>
      </div>
    );
  }
}
