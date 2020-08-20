import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {
  MarketDownFooterInterface,
  MarketFooterMenuInterface,
  MarketUpFooterFormInterface,
} from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-footer",
  styleUrl: "s-cnt-market-footer.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketFooter implements ComponentInterface {
  @Prop() logoFooter: string;

  @Prop() footerMenu: MarketFooterMenuInterface[] = [];

  @Prop() forUpFooterForm: MarketUpFooterFormInterface;

  @Prop() forDownFooter: MarketDownFooterInterface;

  @Prop() forFooterInfo;

  /**
   * Данные для всего футера
   * */
  @Prop() footerData: any;

  render() {
    return (
      <footer>
        <div class="upFooter">
          <div class="container">
            <div class="row">
              <div class=" col-12 col-lg-3   ">
                <div
                  class="logo"
                  style={{
                    backgroundImage: `url(${this.footerData.logoFooter})`,
                  }}
                ></div>
              </div>
              <FooterMenu array={this.footerMenu} />
              <div class=" col-12 col-sm-12 col-md-4 col-lg-3 ">
                <s-cnt-market-up-footer-form
                  footerContactColumn={this.footerData.footerContactColumn}
                />
              </div>
            </div>
          </div>
          <div class="line"> </div>
        </div>
        <s-cnt-market-down-footer forDownFooter={this.forDownFooter} />
        <s-cnt-market-footer-info forFooterInfo={this.forFooterInfo} />
      </footer>
    );
  }
}

const FooterMenu = (props) => {
  return props.array.map((item) => {
    return (
      <div class=" col-12 col-sm-6 col-md-4 col-lg-3">
        <s-cnt-market-up-footer footerMenu={item} />
      </div>
    );
  });
};
