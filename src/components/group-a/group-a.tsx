import {Component, ComponentInterface, h, State} from "@stencil/core";
import {header} from "../../utils/mock-b";
import {footerData} from "../../utils/mock-a";

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
      <main>
        {/*<s-cnt-market-modal-window />*/}
        <s-cnt-market-header-wrapper categories={header} login={this.login} > </s-cnt-market-header-wrapper>
        <s-cnt-market-first-page/>
        {/*<s-cnt-market-shop/>*/}
        <s-cnt-market-footer
          footerData={footerData}
        />
        <s-cnt-market-back-to-top></s-cnt-market-back-to-top>
      </main>
    );
  }
}
