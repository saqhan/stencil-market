import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {MarketProductListInterface} from "../../../../../../../../index";

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
  @Prop() productsList: MarketProductListInterface[];

  /**
   * Клик по карточке для показа модального окна
   */
  @Event() showModal: EventEmitter<void>;

  /**
   * Клик
   */
  @Event() selectedId: EventEmitter;

  render() {
    return (
      <div class="products-list">
        <div class="main-container">
          <div class="products-list-row">
            <ProductsListFunctionalComponent
              array={this.productsList}
            ></ProductsListFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const ProductsListFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <s-cnt-market-products-list-card
        productsList={item}
      ></s-cnt-market-products-list-card>
    );
  });
};
