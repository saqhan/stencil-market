import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-recently-watched-card",
  styleUrl: "s-cnt-market-recently-watched-card.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketRecentlyWatchedCard implements ComponentInterface {
  /**
   * Данные карточек слайдера просмотренных товаров
   */
  @Prop() recentlyWatchedProducts: any;

  render() {
    console.log("недавние", this.recentlyWatchedProducts);
    return (
      <div class="product-card">
        <div class="product-card-item">
          <div class="product-card-img-wrapper">
            <div
              class="product-card-img"
              style={{
                backgroundImage: `url(${this.recentlyWatchedProducts.img})`,
              }}
            ></div>
          </div>
          <div class="product-card-desc">
            {" "}
            <div class="product-price">
              {this.recentlyWatchedProducts.price ? (
                <div class="price">
                  {this.recentlyWatchedProducts.price}
                  <span> {this.recentlyWatchedProducts.currency}</span>
                </div>
              ) : (
                <div class="price-discount">
                  <div class="price price-discount-sale">
                    <div class="price-default">
                      {this.recentlyWatchedProducts.disPrice}
                      <span>{this.recentlyWatchedProducts.currency}</span>
                    </div>
                    <div class="price-original">
                      {this.recentlyWatchedProducts.oldPrice}
                      <span>{this.recentlyWatchedProducts.currency}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div class="product-bottom-info">
              {this.recentlyWatchedProducts.weight}
            </div>
          </div>
        </div>
        <div class="product-cart">
          <div class="product-cart-box">
            <div class="product-cart-add">
              <i class="fas fa-plus"></i>
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
