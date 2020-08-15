import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-header-wrapper',
  styleUrl: 's-cnt-market-header-wrapper.css',
  shadow: false,
  scoped: true
})
export class SCntMarketHeaderWrapper implements ComponentInterface {
  /**
   * Массив данных для хедера
   * */
  @Prop() categories: any;

  /**
   * log in user
   * */
  @Prop() login: boolean;

  render() {
    return (
      <div>
        {
          this.login
          ? <s-cnt-market-header categories={this.categories} ></s-cnt-market-header>
          : <s-cnt-market-header-unlogged logo={this.categories.body.logo} number={this.categories.numberHeader} ></s-cnt-market-header-unlogged>
        }


      </div>
    );
  }

}
