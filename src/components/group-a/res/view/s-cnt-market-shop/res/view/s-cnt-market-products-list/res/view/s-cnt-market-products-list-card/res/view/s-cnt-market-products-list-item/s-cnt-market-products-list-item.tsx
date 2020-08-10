import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketCardInterface} from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-products-list-item",
  styleUrl: "s-cnt-market-products-list-item.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsListItem implements ComponentInterface {
  /**
   * Данные для карточки товара
   */
  @Prop() productsListCard: MarketCardInterface;

  /**
   *
   */
  public productLinkTag: HTMLElement;

  componentDidLoad() {
    this.disabledProductCard()
  }

  render() {
    console.log('мультипак', this.productsListCard)
    return (
      <div class="product-list-card">
        <div class="product-link" ref={(el) => this.productLinkTag = el}>
          {
            this.productsListCard.multipack
            ?
              <div class="product-multipack">
                <div class="product-multipack-count">
                  {this.productsListCard.multipack.amount}
                </div>
                <div class="product-multipack-text">
                  {this.productsListCard.multipack.weight}
                </div>
              </div>
            :
              ""
          }


          <div
            class="product-img-wrapper"
          >
            <div class="product-img" style={{ backgroundImage: `url(${this.productsListCard.img})` }}></div>
            <div class="product-cart">
              <div class="product-favorite">
                <i class="fas fa-heart"></i>
              </div>
              <div class="product-cart-box">
                <div class="product-cart-add">
                  <i class="fas fa-plus"></i>
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="product-price">
            {
              this.productsListCard.price
              ?
                <div class="price">
                  {this.productsListCard.price}
                </div>
              :
                <div class="price-discount">
                  <div class="price price-discount-sale">
                    <div class="price-default">
                      {this.productsListCard.disPrice}
                      <span>{this.productsListCard.currency}</span>
                    </div>
                    <div class="price-original">
                      {this.productsListCard.oldPrice}
                      <span>{this.productsListCard.currency}</span>
                    </div>
                  </div>
                  <div class="price price-discount-info">
                    <div class="discount-percent">
                      {this.productsListCard.discount}
                    </div>
                    <div class="discount-ending">
                      {this.productsListCard.disDate}
                    </div>
                  </div>
                </div>
            }

          </div>
          <p class="product-desc">{this.productsListCard.desc}</p>
          <p class="product-weight">{this.productsListCard.weight}</p>
        </div>
      </div>
    );
  }

  /**
   * Смена стилей карточки если товара нет в наличии
   */
  public disabledProductCard() {
    if (this.productsListCard.weight === "Нет в наличии") {
      this.productLinkTag.classList.add("disabled")
    }
  }
}
