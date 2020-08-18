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
      <div class="container">
        <div class="app">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="common">
                <div class="title">{this.forApp[0].title}</div>

                <div class="commonButton">
                  <div class="btn-wrapper">
                    <button class="left btn">
                      {this.forApp[0].appStoreButton}
                      <i class="fab fa-apple"> </i>
                    </button>
                    <button class="right btn">
                      {this.forApp[0].googlePlayButton}
                      <i class="fab fa-google-play"> </i>
                    </button>
                  </div>
                  {/*<div class="appStoreButton">*/}
                  {/*  <div class="button">*/}
                  {/*    <button class="btn">*/}
                  {/*      {this.forApp[0].appStoreButton}*/}
                  {/*      <i class="fab fa-apple"> </i>*/}
                  {/*    </button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div class="googlePlayButton">*/}
                  {/*  <div class="button">*/}
                  {/*    <button class="btn">*/}
                  {/*      {this.forApp[0].googlePlayButton}*/}
                  {/*      <i class="fab fa-google-play"> </i>*/}
                  {/*    </button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12">
              <div
                class="image"
                style={{ backgroundImage: "url(" + this.forApp[0].image + ")" }}
              >
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
