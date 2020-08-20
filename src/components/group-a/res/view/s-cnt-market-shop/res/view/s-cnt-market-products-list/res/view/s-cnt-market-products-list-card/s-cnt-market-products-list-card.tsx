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
    window.addEventListener('resize', () => this.changesAmountCards());
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
          <ProductsListItem array={this.productListState}></ProductsListItem>
        </div>
      </div>
    );
  }

  public changesAmountCards() {
    if (window.innerWidth < 1883) {
      this.productListState = this.productsList.card.slice(0, 8)
    }
    else if (window.innerWidth < 1676) {
      this.productListState = this.productsList.card.slice(0, 7)
    }
    else if (window.innerWidth < 1469) {
      this.productListState = this.productsList.card.slice(0, 6)
    }
    else if (window.innerWidth < 1261) {
      this.productListState = this.productsList.card.slice(0, 5)
    }
    else if (window.innerWidth < 1055) {
      this.productListState = this.productsList.card.slice(0, 4)
    }
    else if (window.innerWidth < 848) {
      this.productListState = this.productsList.card.slice(0, 3)
    }
    else if (window.innerWidth < 481) {
      this.productListState = this.productsList.card.slice(0, 2)
    }
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

