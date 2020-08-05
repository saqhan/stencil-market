import {Component, ComponentInterface, h, Prop} from "@stencil/core";

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
  @Prop() getRecommended: any;

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
