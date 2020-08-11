import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-footer-info',
  styleUrl: 's-cnt-market-footer-info.css',
  shadow: false,
  scoped: true
})
export class SCntMarketFooterInfo implements ComponentInterface {

  @Prop() forFooterInfo;

  render() {
    return (
      <div class="footerInfo">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-auto">
              <div class="text">
                {this.forFooterInfo[0]}
              </div>
            </div>
            <div class="col-auto">
              <div class="text">
                {this.forFooterInfo[1]}
              </div>
            </div>
            <div class="col-auto">
              <div class="text">
                {this.forFooterInfo[2]}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
