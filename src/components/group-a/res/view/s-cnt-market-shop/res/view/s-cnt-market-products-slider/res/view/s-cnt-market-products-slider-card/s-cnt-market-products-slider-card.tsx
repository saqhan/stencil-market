import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-products-slider-card',
  styleUrl: 's-cnt-market-products-slider-card.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductsSliderCard implements ComponentInterface {

  render() {
    return (
      <a class="products-card">
        <div class="products-card-item">
          <div class="products-card-img">

          </div>
          <div class="products-card-desc">
            <div class="products-price">
              <span class="prise-dis">
                <span></span>
              </span>
              <span class="price-old">
                <span></span>
              </span>
            </div>
            <p class="products-name"></p>
            <div class="products-bottom-info"></div>
          </div>
        </div>
      </a>
    );
  }

}
