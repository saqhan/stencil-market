import { Component, ComponentInterface, h } from "@stencil/core";
import {
  footerMenu,
  forDownFooter,
  logoFooter, forFooterInfo,
  forUpFooterForm,
} from "../../utils/mock-a";

@Component({
  tag: "group-a",
  styleUrl: "group-a.css",
  shadow: false,
  scoped: true,
})
export class GroupA implements ComponentInterface {
  render() {
    return (
      <div>
        {/*<s-cnt-market-modal-window />*/}
        {/*<s-cnt-market-first-page />*/}
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
