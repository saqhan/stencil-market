import {Component, ComponentInterface, h, State} from '@stencil/core';
import {header} from "../../utils/mock-b";
import {
  footerMenu, forDownFooter, forFooterInfo, forUpFooterForm,
  logoFooter,
  productsList,
  productsSliderCards,
  productsSliderTitle,
  promoSliderCards,
  recentlyWatchedProducts, recentlyWatchedTitle
} from "../../utils/mock-a";

@Component({
  tag: 'group-b',
  styleUrl: 'group-b.css',
  shadow: false,
  scoped: true
})
export class GroupB implements ComponentInterface {

  /**
   * Стейт для открытия/закрытия модального окна
   */
  @State() showModalState = false;

  /**
   * выводими в зависимости от авторизации начальную шапку
   * */
  @State() login: boolean = true;

  render() {
    return (
      <div>
        <s-cnt-market-header-wrapper categories={header} login={this.login} > </s-cnt-market-header-wrapper>
        <div >
          <div class='overlayBackDrop'> </div>
          <s-cnt-market-promo-slider promoSliderCards={promoSliderCards}> </s-cnt-market-promo-slider>
          <s-cnt-market-products-slider productsSliderCards={productsSliderCards} productsSliderTitle={productsSliderTitle} onShowModal={() => this.showOrCloseModal()}> </s-cnt-market-products-slider>
          <s-cnt-market-products-list onShowModal={() => this.showOrCloseModal()} productsList={productsList}> </s-cnt-market-products-list>
          <s-cnt-market-recently-watched onShowModal={() => this.showOrCloseModal()} recentlyWatchedProducts={recentlyWatchedProducts} recentlyWatchedTitle={recentlyWatchedTitle}
          > </s-cnt-market-recently-watched>
          {this.showModalState === true ? (<s-cnt-market-modal-window onClickOnModal={() => this.showOrCloseModal()}> </s-cnt-market-modal-window>
          ) : ("")}
          <s-cnt-market-footer
            logoFooter={logoFooter}
            footerMenu={footerMenu}
            forUpFooterForm={forUpFooterForm}
            forDownFooter={forDownFooter}
            forFooterInfo={forFooterInfo}
          />
          <s-cnt-market-back-to-top> </s-cnt-market-back-to-top>
        </div>
      </div>
    );
  }


/**
 * GROUP A
 * */

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
