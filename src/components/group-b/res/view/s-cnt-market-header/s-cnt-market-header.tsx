import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "s-cnt-market-header",
  styleUrl: "s-cnt-market-header.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketHeader implements ComponentInterface {
  @Prop()topBar: any;

  render() {
    return (
      <div class="header-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <s-cnt-market-top-bar topBar={this.topBar}></s-cnt-market-top-bar>
              <s-cnt-market-header-body></s-cnt-market-header-body>
              <s-cnt-market-header-nav></s-cnt-market-header-nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
