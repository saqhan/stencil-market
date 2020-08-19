import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketDownFooterInterface } from "../../interface/common.interface";

@Component({
  tag: "s-cnt-market-down-footer",
  styleUrl: "s-cnt-market-down-footer.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketDownFooter implements ComponentInterface {
  /**
   * Данные для DownFooter
   */
  @Prop() forDownFooter: MarketDownFooterInterface;

  render() {
    return (
      <div class="downFooter">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="copy ">
                      <div class="copyright">{this.forDownFooter.copyright}</div>
                      <div class="company">{this.forDownFooter.company}</div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="icons">
                      <div class="facebook">
                        <i class="fab fa-facebook" />
                      </div>
                      <div class="vk">
                        <i class="fab fa-vk" />
                      </div>
                      <div class="instagram">
                        <i class="fab fa-instagram" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="download">{this.forDownFooter.download}</div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="iconsApp">
                      <div class="apple">
                        <i class="fab fa-apple" />
                      </div>
                      <div class="google">
                        <i class="fab fa-google-play" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
