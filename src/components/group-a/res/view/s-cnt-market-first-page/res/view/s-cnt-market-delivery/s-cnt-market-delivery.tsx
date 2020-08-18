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
  @Prop() forDelivery: MarketDeliveryInterface[] = [];

  /**
   * Данные для заголовка
   */
  @Prop() deliveryTitleText: string;

  /**
   * Данные для картинки
   */
  @Prop() deliveryImage: string;

  render() {
    return (
      <div class="delivery">
        <div class="container">
          <div class="row">
            <div class="col-md-12 p-0">
              <div
                class="title"
                innerHTML={markdown.toHTML(this.deliveryTitleText)}
              ></div>

            </div>
            <div
              class="deliveryImage"
              style={{ backgroundImage: "url(" + this.deliveryImage + ")" }}
            ></div>
            <div class="listOfCities">
              <ul class="list">
                <li class="city">{this.forDelivery[0].nameCityMoscow}</li>
                <li class="city">{this.forDelivery[0].nameCityAbakan}</li>
                <li class="city">{this.forDelivery[0].nameCityAnadyr}</li>
                <li class="city">{this.forDelivery[0].nameCityAstrahan}</li>
                <li class="city">{this.forDelivery[0].nameCityBarnaul}</li>
                <li class="city">{this.forDelivery[0].nameCityBerdsk}</li>
              </ul>
              <ul class="list">
                <li class="city">
                  {this.forDelivery[0].nameCitySaintPetersburg}
                </li>
                <li class="city">{this.forDelivery[0].nameCityAlmetyevsk}</li>
                <li class="city">{this.forDelivery[0].nameCityArkhangelsk}</li>
                <li class="city">{this.forDelivery[0].nameCityBalashikha}</li>
                <li class="city">{this.forDelivery[0].nameCityBelgorod}</li>
                <li class="city">{this.forDelivery[0].nameCityBiysk}</li>
              </ul>
            </div>
              <button class="btn">{this.forDelivery[0].button}</button>
          </div>
        </div>
      </div>
    );
  }
}
