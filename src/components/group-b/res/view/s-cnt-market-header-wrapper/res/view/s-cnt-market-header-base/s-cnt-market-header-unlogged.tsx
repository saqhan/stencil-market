import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-header-base",
  styleUrl: "s-cnt-market-header-base.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeaderUnlogged implements ComponentInterface {
  /**
   *
   * */
  @Prop() logo: string;

  /**
   *
   * */
  @Prop() number: string;

  render() {
    return (
      <div class="container-fluid">
        <div class="unlogged-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <div class="left">
                  <div
                    class="logo"
                    style={{
                      backgroundImage: `url(${this.logo})`,
                    }}
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="right">
                  <div class="number">
                    <a href="tel:+78002221100">{this.number}</a>
                  </div>
                  <div class="btn-login">
                    <button>Войти</button>
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
