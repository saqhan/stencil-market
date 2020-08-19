import {Component, ComponentInterface, h, State} from "@stencil/core";
import {
  footerMenu,
  forDownFooter,
  logoFooter, forFooterInfo,
  forUpFooterForm,
} from "../../utils/mock-a";
import {header} from "../../utils/mock-b";

@Component({
  tag: "group-a",
  styleUrl: "group-a.css",
  shadow: false,
  scoped: true,
})
export class GroupA implements ComponentInterface {

  /**
   * выводими в зависимости от авторизации начальную шапку
   * */
  @State() login: boolean = true;

  render() {
    return (
      <div>
        {/*<s-cnt-market-modal-window />*/}
        <s-cnt-market-header-wrapper categories={header} login={this.login} > </s-cnt-market-header-wrapper>

        <s-cnt-market-first-page />
        {/*<s-cnt-market-shop/>*/}
        <s-cnt-market-footer
          logoFooter={logoFooter}
          footerMenu={footerMenu}
          forUpFooterForm={forUpFooterForm}
          forDownFooter={forDownFooter}
          forFooterInfo={forFooterInfo}
        />
      </div>
    );
  }
}
