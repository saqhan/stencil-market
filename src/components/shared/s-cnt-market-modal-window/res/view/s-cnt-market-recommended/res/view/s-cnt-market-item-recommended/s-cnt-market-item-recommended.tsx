import { Component, ComponentInterface, h, Prop } from "@stencil/core";
@Component({
  tag: "s-cnt-market-item-recommended",
  styleUrl: "s-cnt-market-item-recommended.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemRecommended implements ComponentInterface {
  /**
   * Данные для Item-Recommended
   */
  @Prop() getRecommended: any;

  render() {
    console.log('getRecommended', this.getRecommended)
    return (
      <div>
        <div class="recomm">
          <div class="block-image">
            <div
              class="image"
              style={{
                backgroundImage: "url(" + this.getRecommended.image + ")",
              }}
            ></div>
          </div>
          <div class="info">
            <div class="price">{this.getRecommended.price}</div>
            <div class="productName">{this.getRecommended.productName}</div>
            <div class="weight">{this.getRecommended.weight}</div>
          </div>
        </div>
      </div>
    );
  }
}
