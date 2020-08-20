import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import { MarketDeliveryInterface } from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-delivery",
  styleUrl: "s-cnt-market-delivery.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketDelivery implements ComponentInterface {
  /**
   * Данные для компонента delivery
   */
  @Prop() delivery: MarketDeliveryInterface;

  render() {
    return (
      <div class="delivery">
        <div class="container">
          <div class="row">
            <div class="col-md-12 p-0">
              <div
                class="title"
                innerHTML={markdown.toHTML(this.delivery.title)}
              ></div>
            </div>
            <div
              class="deliveryImage"
              style={{ backgroundImage: "url(" + this.delivery.img + ")" }}
            ></div>
            <div class="listOfCities">
              <div class="cities">
                <DeliveryItemFunctionalComponent
                  array={this.delivery.cities}
                ></DeliveryItemFunctionalComponent>
              </div>
            </div>
            <button class="btn">{this.delivery.btn}</button>
          </div>
        </div>
      </div>
    );
  }
}

const DeliveryItemFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div class="city">
        <s-cnt-market-delivery-item
          delivery={item}
        ></s-cnt-market-delivery-item>
      </div>
    );
  });
};
