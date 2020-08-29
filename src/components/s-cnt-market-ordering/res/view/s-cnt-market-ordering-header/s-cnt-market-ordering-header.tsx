import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-ordering-header',
  styleUrl: 's-cnt-market-ordering-header.css',
  shadow: false,
  scoped: true
})
export class SCntMarketOrderingHeader implements ComponentInterface {
  @Prop() logo: string;

  render() {
    return (
      <header class="ordering-header">
        <div class="logo" style={{backgroundImage: `url(${this.logo})`}}>

        </div>
      </header>
    );
  }

}
