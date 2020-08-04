import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-selection",
  styleUrl: "s-cnt-market-selection.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketSelection implements ComponentInterface {
  /**
   * Данные для карточек магазинов
   */
  @Prop() payload: any;

  /**
   * Данные для главной картинки
   */
  @Prop() homePageImage: any;

  render() {
    return (
      <div class="selection">
        <div class="imageHome">
          <img src={this.homePageImage} class="image" />
        </div>
        <div class="container">
          <div class="row">
            <GetSelection array={this.payload}></GetSelection>
          </div>
        </div>
      </div>
    );
  }
}

const GetSelection = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-md-4">
        <s-cnt-market-item-selection
          payload={item}
        ></s-cnt-market-item-selection>
      </div>
    );
  });
};
