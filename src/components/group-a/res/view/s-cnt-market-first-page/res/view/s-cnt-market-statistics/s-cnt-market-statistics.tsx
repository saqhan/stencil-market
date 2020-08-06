import { Component, ComponentInterface, h, Prop } from "@stencil/core";

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
  @Prop() forStatistics: any;

  render() {
    return (
      <div class="statistics">
        <div class="container">
          <div class="row">
            <GetStatistics arrayStatistics={this.forStatistics}></GetStatistics>
          </div>
        </div>
      </div>
    );
  }
}

const GetStatistics = (props) => {
  return props.arrayStatistics.map((item) => {
    return (
      <div class="col-md-6">
        <s-cnt-market-item-statistics forStatistics={item}>
        </s-cnt-market-item-statistics>
      </div>
    );
  });
};
