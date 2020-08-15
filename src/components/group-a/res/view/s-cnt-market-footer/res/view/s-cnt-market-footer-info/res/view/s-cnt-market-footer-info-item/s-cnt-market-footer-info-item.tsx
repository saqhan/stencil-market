import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-footer-info-item',
  styleUrl: 's-cnt-market-footer-info-item.css',
  shadow: false,
  scoped: true
})
export class SCntMarketFooterInfoItem implements ComponentInterface {

  @Prop() forFooterInfo;

  render() {
    return (
      <div class="text">
        {this.forFooterInfo}
      </div>
    );
  }

}
