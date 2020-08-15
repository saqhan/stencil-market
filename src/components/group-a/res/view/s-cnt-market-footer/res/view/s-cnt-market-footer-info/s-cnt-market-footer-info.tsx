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
            <FooterInfoItem array={this.forFooterInfo}/>
          </div>
        </div>
      </div>
    );
  }

}

const FooterInfoItem = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-auto">
        <s-cnt-market-footer-info-item forFooterInfo={item} />
      </div>
    )
  })
}
