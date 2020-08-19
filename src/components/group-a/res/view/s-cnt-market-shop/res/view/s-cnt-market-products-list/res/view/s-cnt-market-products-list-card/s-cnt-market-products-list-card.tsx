import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State} from "@stencil/core";
import {MarketProductListInterface} from "../../interface/common.interface";

@Component({
  tag: "s-cnt-market-products-list-card",
  styleUrl: "s-cnt-market-products-list-card.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsListCard implements ComponentInterface {
  /**
   * Данные для списка товаров
   */
  @Prop() productsList: MarketProductListInterface;

  /**
   * Клик по карточке для показа модального окна
   */
  @Event() showModal: EventEmitter<void>;

  /**
   * Передача данных для списка товаров в стейт
   */
  @State() productListState = this.productsList.card;


  componentDidLoad() {
    if (window.innerWidth < 992) {
      return this.productListState.slice(0,3)
    }
    else {
      return this.productListState;
    }
  }

  render() {
    return (
      <div class="products-list-wrapper">
        <div class="products-list-header">
          <div class="products-list-title">{this.productsList.header.title}</div>
          <div class="show-all">
            <span>{this.productsList.header.allProducts}</span>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
        <div class="products-list-body">
          <ProductsListItem array={this.componentDidLoad()}></ProductsListItem>
        </div>
      </div>
    );
  }
}

const ProductsListItem = (props) => {
      return props.array.map((item) => {
        return (
          <s-cnt-market-products-list-item
            productsListCard={item}
          ></s-cnt-market-products-list-item>
        );
      });
};
