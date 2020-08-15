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

  render() {
    return (
      <div>
        <s-cnt-market-header categories={this.categories} ></s-cnt-market-header>
        {/*<s-cnt-market-header-unlogged></s-cnt-market-header-unlogged>*/}
      </div>
    );
  }

}
