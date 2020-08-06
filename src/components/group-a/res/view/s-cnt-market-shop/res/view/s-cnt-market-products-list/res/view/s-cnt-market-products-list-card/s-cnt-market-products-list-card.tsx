import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-products-list-card',
  styleUrl: 's-cnt-market-products-list-card.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductsListCard implements ComponentInterface {
  /**
   * Данные для списка товаров
   */
  @Prop() productsList: any;

  render() {console.log(this.productsList)
    return (
      <div class="products-list-wrapper">
        <div class="products-list-header">
          <div class="products-list-title">
            {this.productsList.title}
          </div>
        </div>
        <ProductsListItem array={this.productsList.card}></ProductsListItem>
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



