import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketAppInterface } from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-app",
  styleUrl: "s-cnt-market-app.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketApp implements ComponentInterface {
  /**
   * Данные для компонента app
   */

  @Prop() forApp: MarketAppInterface[] = [];

  render() {
    return (
      <div class="app">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="common">
                <div class="title">{this.forApp[0].title}</div>
              </div>
              <div class="commonButton d-flex">
                <div class="appStoreButton">
                  <div class="button">
                    <button class="btn">
                      {this.forApp[0].appStoreButton}
                      <i class="fab fa-apple"></i>
                    </button>
                  </div>
                </div>
                <div class="googlePlayButton">
                  <div class="button">
                    <button class="btn">
                      {this.forApp[0].googlePlayButton}
                      <i class="fab fa-google-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="image"
                style={{ backgroundImage: "url(" + this.forApp[0].image + ")" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
