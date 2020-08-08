import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { markdown } from "markdown";
import {MarketDeliveryInterface} from "./res/interface/common.interface";

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
  @Prop() forDelivery: MarketDeliveryInterface;

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
        <div class="deliveryImage" style={{ backgroundImage: "url(" + this.deliveryImage + ")" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title" innerHTML={markdown.toHTML(this.deliveryTitleText)}>
                </div>
              </div>
              <div class="listOfCities">
                <ul class="list">
                  <li class="city">{this.forDelivery.nameCityMoscow}</li>
                  <li class="city">{this.forDelivery.nameCityAbakan}</li>
                  <li class="city">{this.forDelivery.nameCityAnadyr}</li>
                  <li class="city">{this.forDelivery.nameCityAstrahan}</li>
                  <li class="city">{this.forDelivery.nameCityBarnaul}</li>
                  <li class="city">{this.forDelivery.nameCityBerdsk}</li>
                </ul>
              </div>
              <div class="listOFCities">
                <ul class="list">
                  <li class="city">{this.forDelivery.nameCitySaintPetersburg}</li>
                  <li class="city">{this.forDelivery.nameCityAlmetyevsk}</li>
                  <li class="city">{this.forDelivery.nameCityArkhangelsk}</li>
                  <li class="city">{this.forDelivery.nameCityBalashikha}</li>
                  <li class="city">{this.forDelivery.nameCityBelgorod}</li>
                  <li class="city">{this.forDelivery.nameCityBiysk}</li>
                </ul>
              </div>
              <div class="col-md-12">
                <div class="button">
                <button class="btn">
                  {this.forDelivery[0].button}
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
