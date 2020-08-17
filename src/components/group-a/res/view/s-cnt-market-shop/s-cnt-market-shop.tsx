import { Component, ComponentInterface, h, State } from "@stencil/core";
import {
  productsList,
  productsSliderCards,
  productsSliderTitle,
  promoSliderCards,
  recentlyWatchedProducts,
  recentlyWatchedTitle,
} from "../../../../../utils/mock-a";

@Component({
  tag: "s-cnt-market-shop",
  styleUrl: "s-cnt-market-shop.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketShop implements ComponentInterface {
  /**
   * Стейт для открытия/закрытия модального окна
   */
  @State() showModalState = false;

  render() {
    return (
      <main>
        <s-cnt-market-promo-slider
          promoSliderCards={promoSliderCards}
        ></s-cnt-market-promo-slider>
        <s-cnt-market-products-slider
          productsSliderCards={productsSliderCards}
          productsSliderTitle={productsSliderTitle}
          onShowModal={() => this.showOrCloseModal()}
        ></s-cnt-market-products-slider>
        <s-cnt-market-products-list
          onShowModal={() => this.showOrCloseModal()}
          productsList={productsList}
        ></s-cnt-market-products-list>
        <s-cnt-market-recently-watched
          onShowModal={() => this.showOrCloseModal()}
          recentlyWatchedProducts={recentlyWatchedProducts}
          recentlyWatchedTitle={recentlyWatchedTitle}
        ></s-cnt-market-recently-watched>
        {this.showModalState === true ? (
          <s-cnt-market-modal-window
            onClickOnModal={() => this.showOrCloseModal()}
          ></s-cnt-market-modal-window>
        ) : (
          ""
        )}
        <s-cnt-market-back-to-top></s-cnt-market-back-to-top>
      </main>
    );
  }

  /**
   * Открытие и закрытие модального окна
   */
  public showOrCloseModal() {
    this.showModalState = !this.showModalState;
    this.bodyToggleScroll();
  }

  /**
   * Отключение и включение прокрутки body
   */
  public bodyToggleScroll() {
    if (this.showModalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

}
