import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-products-list-item',
  styleUrl: 's-cnt-market-products-list-item.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductsListItem implements ComponentInterface {

  /**
   * Данные для карточки товара
   */
  @Prop() productsListCard: any

  render() {
    return (
      <div class="products-list-body">
        <div class="product-list-card">
          <div class="product-link">
            <div class="product-img">

            </div>
            <div class="product-price">
              <div class="price-discount">
                <div class="price-discount-sale">
                  <div class="price-default">
                    {this.productsListCard.disPrice}
                    <span></span>
                  </div>
                  <div class="price-original">
                    {this.productsListCard.oldPrice}
                    <span></span>
                  </div>
                </div>
                <div class="price-discount-info">
                  <div class="discount-percent">{this.productsListCard.discount}</div>
                  <div class="discount-ending">{this.productsListCard.disDate}</div>
                </div>
              </div>
            </div>
            <p class="product-desc">
              {this.productsListCard.desc}
            </p>
            <p class="product-weight">
              {this.productsListCard.weight}
            </p>
          </div>
        </div>
      </div>
    );
  }

}
