import { Component, ComponentInterface, h } from "@stencil/core";
import {
  productsList,
  productsSliderCards, productsSliderTitle,
  promoSliderCards,
} from "../../../../../utils/mock-a";

@Component({
  tag: "s-cnt-market-shop",
  styleUrl: "s-cnt-market-shop.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketShop implements ComponentInterface {
  render() {
    return (
      <main>
        <s-cnt-market-promo-slider
          promoSliderCards={promoSliderCards}
        ></s-cnt-market-promo-slider>
        <s-cnt-market-products-slider
          productsSliderCards={productsSliderCards}
          productsSliderTitle={productsSliderTitle}
        ></s-cnt-market-products-slider>
        <s-cnt-market-products-list productsList={productsList}></s-cnt-market-products-list>
      </main>
    );
  }
}
