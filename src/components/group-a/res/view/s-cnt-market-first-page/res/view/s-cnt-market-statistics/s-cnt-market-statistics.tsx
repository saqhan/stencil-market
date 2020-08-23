import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketStatisticsInterface} from "../../../../../../../../index";

@Component({
  tag: "s-cnt-market-statistics",
  styleUrl: "s-cnt-market-statistics.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketStatistics implements ComponentInterface {
  /**
   * Данные для компонента Statistics
   */
  @Prop() forStatistics: MarketStatisticsInterface[] = [];

  render() {
    return (
      <div class="statistics">
        <div class="container">
          <div class="row justify-content-around">
            <GetStatisticsFunctionalComponent
              arrayStatistics={this.forStatistics}
            ></GetStatisticsFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const GetStatisticsFunctionalComponent = (props) => {
  return props.arrayStatistics.map((item) => {
    return (
      <div class="col-lg-5 col-md-12">
        <s-cnt-market-item-statistics
          forStatistics={item}
        ></s-cnt-market-item-statistics>
      </div>
    );
  });
};
