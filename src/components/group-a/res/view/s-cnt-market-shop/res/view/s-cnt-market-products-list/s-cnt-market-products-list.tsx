import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {MarketProductListInterface} from "./res/interface/common.interface";

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
  @Prop() productsList: MarketProductListInterface[] = [];

  /**
   * Клик по карточке для показа модального окна
   */
  @Event() showModal: EventEmitter<void>;

  render() {
    return (
      <div class="products-list">
        <div class="main-container">
          <div class="products-list-row">
            <ProductsList array={this.productsList}></ProductsList>
          </div>
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
