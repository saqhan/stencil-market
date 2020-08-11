import {Component, ComponentInterface, h, Prop} from '@stencil/core';
// import {MarketUpFooterInterface} from "./res/interface/common.interface";

@Component({
  tag: 's-cnt-market-up-footer',
  styleUrl: 's-cnt-market-up-footer.css',
  shadow: false,
  scoped: true
})
export class SCntMarketUpFooter implements ComponentInterface {
  /**
   * Данные для UpFooter
   */
  @Prop() forUpFooter;

  /**
   * Данные для UpFooterForm
   */
  @Prop() forUpFooterForm;

  @Prop() logo: string;

  render() {
    return (
      <div class="upFooter">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-auto">
              <div class="logo">
                <img src={this.logo} alt=""/>
              </div>
            </div>
            <div class="col-md-3">
              <div class="my-block">
                <div class="sberMarket">
                  {this.forUpFooter[0]}
                </div>
                  <div class="item-li">
                    {this.forUpFooter[1]}
                  </div>
                  <div class="item-li">
                    {this.forUpFooter[2]}
                  </div>
                  <div class="item-lil">
                    {this.forUpFooter[3]}
                  </div>
                  <div class="item-li">
                    {this.forUpFooter[4]}
                  </div>
                  <div class="item-li">
                    {this.forUpFooter[5]}
                  </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="my-block">
                <div class="help">
                  {this.forUpFooter[6]}
                </div>
                <div class="item-li">
                  {this.forUpFooter[7]}
                </div>
                <div class="item-li">
                  {this.forUpFooter[8]}
                </div>
                <div class="item-li">
                  {this.forUpFooter[9]}
                </div>
                <div class="item-li">
                  {this.forUpFooter[10]}
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <s-cnt-market-up-footer-form
                forUpFooterForm={this.forUpFooterForm}
              />
            </div>
          </div>
        </div>
        <div class="line">

        </div>
      </div>
    );
  }

}
