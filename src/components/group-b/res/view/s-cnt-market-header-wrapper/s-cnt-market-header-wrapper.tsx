import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-header-wrapper",
  styleUrl: "s-cnt-market-header-wrapper.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeaderWrapper implements ComponentInterface {

  /**
   * Массив данных для хедера
   * */
  @Prop() categories: any;

  /**
   * Авторизация юзера
   * */
  @Prop() login: boolean;

  /**
   * Первоначальная страница
   * */
  @Prop() firstPage: boolean;

  render() {
    return (
      <div>
        {this.firstPage
          ? <s-cnt-market-header-unlogged logo={this.categories.body.logo} number={this.categories.numberHeader}></s-cnt-market-header-unlogged>
          : <s-cnt-market-header categories={this.categories} login={this.login}></s-cnt-market-header>
        }
      </div>
    );
  }
}
