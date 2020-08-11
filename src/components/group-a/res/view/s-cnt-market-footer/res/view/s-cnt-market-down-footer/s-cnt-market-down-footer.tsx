import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-down-footer',
  styleUrl: 's-cnt-market-down-footer.css',
  shadow: false,
  scoped: true
})
export class SCntMarketDownFooter implements ComponentInterface {
  /**
   * Данные для DownFooter
   */
  @Prop() forDownFooter;

  render() {
    return (
      <div class="downFooter">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="copy">
                <div class="copyright">
                  {this.forDownFooter.copyright}
                </div>
                <div class="company">
                  {this.forDownFooter.company}
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="icons">
                <div class="facebook">
                  <i class="fab fa-facebook-f"/>
                </div>
                <div class="vk">
                  <i class="fab fa-vk"/>
                </div>
                <div class="instagram">
                  <i class="fab fa-instagram"/>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="my-block">
                <div class="download">
                  {this.forDownFooter.download}
                </div>
                <div class="icons">
                  <div class="apple">
                    <i class="fab fa-apple"/>
                  </div>
                  <div class="google">
                    <i class="fab fa-google-play"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
