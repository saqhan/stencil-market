import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketProductsSliderCardsInterface } from "../../interface/common.interface";

@Component({
  tag: "s-cnt-market-products-slider-card",
  styleUrl: "s-cnt-market-products-slider-card.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsSliderCard implements ComponentInterface {
  /**
   * Получаем данные карточек слайдера популярных продуктов
   */
  @Prop() productsSliderCards: MarketProductsSliderCardsInterface;

  render() {
    return (
      <div class="products-card">
        <div class="products-card-item">
          <div class="products-card-img-wrapper">
            <div
              class="products-card-img"
              style={{
                backgroundImage: `url(${this.productsSliderCards.img})`,
              }}
            ></div>
          </div>
          <div class="products-card-desc">
            <div class="products-price">
              <span class="price-dis">
                {this.productsSliderCards.price}
                <span>{this.productsSliderCards.currency}</span>
              </span>
              {this.productsSliderCards.oldPrice ? (
                <span class="price-old">
                  {this.productsSliderCards.oldPrice}
                  <span>{this.productsSliderCards.currency}</span>
                </span>
              ) : (
                ""
              )}
            </div>
            <p class="products-name">{this.productsSliderCards.desc}</p>
            <div class="products-bottom-info">
              {this.productsSliderCards.weight}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
