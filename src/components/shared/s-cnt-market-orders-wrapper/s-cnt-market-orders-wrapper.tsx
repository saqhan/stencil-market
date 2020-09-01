import {Component, ComponentInterface, h, State} from '@stencil/core';
import {header} from "../../../utils/mock-b";
import {footerData} from "../../../utils/mock-a";

@Component({
  tag: 's-cnt-market-orders-wrapper',
  styleUrl: 's-cnt-market-orders-wrapper.css',
  shadow: false,
  scoped: true
})
export class SCntMarketOrdersWrapper implements ComponentInterface {

  /**
   * Авторизация юзера
   * */
  @State() login: boolean = true;

  /**
   * Первоначальная страница
   * */
  @State() firstPage: boolean;

  render() {
    return (
      <div class="app" >
        <s-cnt-market-header categories={header} login={this.login}></s-cnt-market-header>
        <main>
          <div class="overlayBackDrop"></div>
          {/*<s-cnt-market-user-account></s-cnt-market-user-account>*/}
          <s-cnt-market-shipments></s-cnt-market-shipments>
          {/*<s-cnt-market-favorite-products></s-cnt-market-favorite-products>*/}
          <s-cnt-market-footer footerData={footerData}></s-cnt-market-footer>
          <s-cnt-market-back-to-top></s-cnt-market-back-to-top>
        </main>
      </div>
    );
  }

}
