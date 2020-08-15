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

  render() {
    return (
      <footer>
        <div class="upFooter">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3 col-sm">
                <div class="logo">
                  <img src={this.logoFooter} alt="" />
                </div>
              </div>
              <FooterMenu array={this.footerMenu} />
              <div class="col-md-3 col-sm">
                <s-cnt-market-up-footer-form
                  forUpFooterForm={this.forUpFooterForm}
                />
              </div>
            </div>
          </div>
          <div class="line"></div>
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
      <div class="col-md-3 col-sm">
        <s-cnt-market-up-footer footerMenu={item} />
      </div>
    );
  });
};
