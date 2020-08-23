import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {footerDataInterface} from "../../../../../index";

@Component({
  tag: "s-cnt-market-footer",
  styleUrl: "s-cnt-market-footer.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketFooter implements ComponentInterface {
  /**
   * Данные для всего футера
   * */
  @Prop() footerData: footerDataInterface;

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
              <FooterMenu array={this.footerData.footerMenu} />
              <div class=" col-12 col-sm-12 col-md-4 col-lg-3 ">
                <s-cnt-market-up-footer-form
                  footerContactColumn={this.footerData.footerContactColumn}
                />
              </div>
            </div>
          </div>
          <div class="line"> </div>
        </div>
        <s-cnt-market-down-footer
          footerCopyrightRow={this.footerData.footerCopyrightRow}
        />
        <s-cnt-market-footer-info
          footerLinksPolitics={this.footerData.footerLinksPolitics}
        />
      </footer>
    );
  }
}

/**
 * Получаем список элементов меню
 * */
const FooterMenu = (props) => {
  return props.array.map((item) => {
    return (
      <div class=" col-12 col-sm-6 col-md-4 col-lg-3">
        <s-cnt-market-up-footer footerMenu={item} ></s-cnt-market-up-footer>
      </div>
    );
  });
};
