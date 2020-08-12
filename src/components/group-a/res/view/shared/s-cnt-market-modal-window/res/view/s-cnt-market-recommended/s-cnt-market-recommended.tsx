import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {MarketRecommendedInterface} from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-recommended",
  styleUrl: "s-cnt-market-recommended.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketRecommended implements ComponentInterface {
  /**
   * Данные для Recommended
   */
  @Prop() getRecommended: MarketRecommendedInterface[] = [];

  @Prop() info: any;

  render() {
    return (
      <div class="recommended">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-6">
              <div class="info">
                {this.info}
              </div>
            </div>
            <div class="col-2">
              <div class="icons">
                <div class="arrow-left">
                  <i class="fa fa-arrow-left arrow" aria-hidden="true"/>
                </div>
                <div class="arrow-right">
                  <i class="fa fa-arrow-right" aria-hidden="true"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            <GetRecommended
            array={this.getRecommended}>
            </GetRecommended>
          </div>
        </div>
      </div>
    );
  }
}

const GetRecommended = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-md-4">
        <s-cnt-market-item-recommended
          getRecommended={item}>
        </s-cnt-market-item-recommended>
      </div>
    )
  })
}
