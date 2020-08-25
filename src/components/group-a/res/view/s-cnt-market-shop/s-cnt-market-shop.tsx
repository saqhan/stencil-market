import { Component, ComponentInterface, h, State } from "@stencil/core";
import {
  productModal,
  productsList,
  productsSliderCards,
  productsSliderTitle,
  promoSliderCards,
  recentlyWatchedProducts,
  recentlyWatchedTitle,
} from "../../../../../utils/mock-a";
import {MarketProductDataInterface} from "../../../../../index";

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

  /**
   *
   */
  @State() productData: MarketProductDataInterface;

  render() {
    return (
      <main>
        <s-cnt-market-promo-slider
          promoSliderCards={promoSliderCards}
        ></s-cnt-market-promo-slider>
        <s-cnt-market-products-slider
          productsSliderCards={productsSliderCards}
          productsSliderTitle={productsSliderTitle}
          onShowModal={(x) => this.showOrCloseModal(x)}
        ></s-cnt-market-products-slider>
        <s-cnt-market-products-list
          onShowModal={(x) => this.showOrCloseModal(x)}
          productsList={productsList}
        ></s-cnt-market-products-list>
        <s-cnt-market-recently-watched
          onShowModal={(x) => this.showOrCloseModal(x)}
          recentlyWatchedProducts={recentlyWatchedProducts}
          recentlyWatchedTitle={recentlyWatchedTitle}
        ></s-cnt-market-recently-watched>
        {this.showModalState ? (
          <s-cnt-market-modal-window
            productModal={productModal}
            productData={this.productData}
            onClickOnModal={(x) => this.showOrCloseModal(x)}
          />
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
  public showOrCloseModal({detail}) {
    this.showModalState = !this.showModalState;
    this.bodyToggleScroll();
    this.productData = {
      ...detail
    }
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
