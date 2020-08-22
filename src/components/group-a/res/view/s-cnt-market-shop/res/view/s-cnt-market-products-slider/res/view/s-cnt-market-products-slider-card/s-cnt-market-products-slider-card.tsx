import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {MarketProductsSliderCardsInterface} from "../../../../../../../../../../../index";

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

  /**
   * Клик по карточке для показа модального окна
   */
  @Event() showModal: EventEmitter<void>;

  render() {
    return (
      <div class="products-card" onClick={() => this.showModalHandler()}>
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
              {this.productsSliderCards.price ? (
                <span class="price">
                  {this.productsSliderCards.price}
                  <span> {this.productsSliderCards.currency}</span>
                </span>
              ) : (
                <div>
                  <span class="price-dis">
                    {this.productsSliderCards.disPrice}
                    <span> {this.productsSliderCards.currency}</span>
                  </span>
                  <span class="price-old">
                    {this.productsSliderCards.oldPrice}
                    <span> {this.productsSliderCards.currency}</span>
                  </span>
                </div>
              )}
            </div>
            <p class="products-name">{this.productsSliderCards.desc}</p>
            <div class="products-bottom-info">
              {this.productsSliderCards.weight}
            </div>
          </div>
        </div>
        <div class="products-cart">
          <div class="products-cart-box">
            <div class="products-cart-add">
              <i class="fas fa-plus"></i>
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   *
   */
  public showModalHandler() {
    this.showModal.emit();
  }
}
