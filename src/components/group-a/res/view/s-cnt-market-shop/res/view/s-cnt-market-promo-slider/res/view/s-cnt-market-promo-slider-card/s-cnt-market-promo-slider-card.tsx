import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketPromoSliderInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-promo-slider-card",
  styleUrl: "s-cnt-market-promo-slider-card.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketPromoSliderCard implements ComponentInterface {
  /**
   * Получаем данные карточек промо-слайдера
   */
  @Prop() promoSliderCards: MarketPromoSliderInterface;

  render() {
    return (
      <div class="promo-slider-card">
        <div
          class="promo-slider-card-container"
          style={{
            backgroundColor: `rgb(${this.promoSliderCards.bgColor})`,
            backgroundImage: `url(${this.promoSliderCards.bgImage})`,
          }}
        >
          <div class="promo-slider-card-content">
            <div class="promo-slider-card-body">
              <div
                class="promo-slider-card-message"
                style={{ color: `rgb(${this.promoSliderCards.color})` }}
              >
                <div class="promo-slider-card-message-header">
                  {this.promoSliderCards.title}
                </div>
                <div class="promo-slider-card-message-body">
                  {this.promoSliderCards.description}
                </div>
              </div>
              {this.promoSliderCards.link ? (
                <a class="promo-slider-card-action">
                  {this.promoSliderCards.link}
                </a>
              ) : (
                ""
              )}
            </div>
            <div class="promo-slider-card-logo">
              <div class="promo-slider-card-logo-bg">
                <div
                  class="promo-slider-card-logo-img"
                  style={{
                    backgroundImage: `url(${this.promoSliderCards.img})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
