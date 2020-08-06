import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-products-list",
  styleUrl: "s-cnt-market-products-list.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsList implements ComponentInterface {
  /**
   * Данные для списка товаров
   */
  @Prop() productsList: any;

  render() {
    return (
      <div class="products-list">
        <div class="products-list-row">
          <ProductsList array={this.productsList}></ProductsList>
        </div>
      </div>
    );
  }
}

const ProductsList = (props) => {
  return props.array.map((item) => {
    return (
      <s-cnt-market-products-list-card
        productsList={item}
      ></s-cnt-market-products-list-card>
    );
  });
};
