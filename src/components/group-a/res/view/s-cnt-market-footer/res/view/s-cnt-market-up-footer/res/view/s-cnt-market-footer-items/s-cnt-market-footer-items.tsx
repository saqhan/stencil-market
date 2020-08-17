import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-footer-items',
  styleUrl: 's-cnt-market-footer-items.css',
  shadow: false,
  scoped: true
})
export class SCntMarketFooterItems implements ComponentInterface {
  @Prop() footerItems;

  render() {
    return (
      <div class="item-li">
        {this.footerItems}
      </div>
    );
  }

}
