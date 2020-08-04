import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-item-selection",
  styleUrl: "s-cnt-market-item-selection.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemSelection implements ComponentInterface {
  @Prop() payload: any;

  render() {
    const getSelection = this.payload.map((item) => {
      return (
        <div class="col-md-4">
          <div class="common">
            <img src={item.image} class="img"/>
            <div class="commonText">
              <div class="title">{item.title}</div>
              <div class="text">{item.text}</div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div class="selection">
        <div class="container">
          <div class="row">{getSelection}</div>
        </div>
      </div>
    );
  }
}
