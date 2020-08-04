import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-item-selection",
  styleUrl: "s-cnt-market-item-selection.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemSelection implements ComponentInterface {
  /**
   * Данные для карточек магазинов
   */
  @Prop() payload: any;

  render() {
    return (
      <div class="common">
        <img src={this.payload.image} class="img"/>
        <div class="commonText">
          <div class="title">{this.payload.title}</div>
          <div class="text">{this.payload.text}</div>
        </div>
      </div>
    );
  }
}
