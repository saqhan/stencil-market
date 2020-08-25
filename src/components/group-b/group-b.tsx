import {Component, ComponentInterface, h, State} from "@stencil/core";
import {header} from "../../utils/mock-b";
import {
  footerData,
  productModal,
  productsList,
  productsSliderCards,
  productsSliderTitle,
  promoSliderCards,
  recentlyWatchedProducts,
  recentlyWatchedTitle,
} from "../../utils/mock-a";

@Component({
  tag: "group-b",
  styleUrl: "group-b.css",
  shadow: false,
  scoped: true,
})
export class GroupB implements ComponentInterface {
  /**
   * Стейт для открытия/закрытия модального окна
   */
  @State() showModalState = false;

  /**
   * выводими в зависимости от авторизации начальную шапку
   * */
  @State() loginState: boolean = false;

  /**
   * Первоначальная страница
   * */
  @State() firstPageState: boolean = true;

  /**
   * boolean значение для вывода/закрытия модального окна входа/регистрация
   */
  @State() loginRegistrationCompleted: boolean;
  /**
   * boolean значение для вывода блока доставка при открытии модального окна
   */
  @State() loginCompleted: boolean;

  /**
   * boolean значение для вывода блока доставка при открытии модального окна
   * и выделении кнопки самовывоза при его выборе посредством присвоения id родительскому блоку
   */
  @State() registrationCompleted: boolean;

  render() {
    return (
      <div>
        <s-cnt-market-header-wrapper
          categories={header}
          login={this.loginState}
          firstPage={this.firstPageState}
          onOpenLoginModal={() => this.openLoginModal()}
        >
          {" "}
        </s-cnt-market-header-wrapper>
        {
          this.loginRegistrationCompleted ? (
            <s-cnt-market-login-and-registration-form
              loginAndRegistration={header.topBar.loginAndRegistration}
              login={this.loginCompleted}
              registration={this.registrationCompleted}
              blockWidth='440px'
              onCloseLogin={() => this.closeLoginModal()}
              onOpenLogin={() => this.openLogin()}
              onOpenRegistration={() => this.openRegistration()}
            ></s-cnt-market-login-and-registration-form>
          ) : (
            ""
          )
        }
        <main>
          <div class="overlayBackDrop"></div>
          <s-cnt-market-promo-slider promoSliderCards={promoSliderCards}>
            {" "}
          </s-cnt-market-promo-slider>
          <s-cnt-market-products-slider
            productsSliderCards={productsSliderCards}
            productsSliderTitle={productsSliderTitle}
            onShowModal={() => this.showOrCloseModal()}
          >
            {" "}
          </s-cnt-market-products-slider>
          <s-cnt-market-products-list
            onShowModal={() => this.showOrCloseModal()}
            productsList={productsList}
          >
            {" "}
          </s-cnt-market-products-list>
          <s-cnt-market-recently-watched
            onShowModal={() => this.showOrCloseModal()}
            recentlyWatchedProducts={recentlyWatchedProducts}
            recentlyWatchedTitle={recentlyWatchedTitle}
          >
            {" "}
          </s-cnt-market-recently-watched>
          {this.showModalState ? (
            <s-cnt-market-modal-window
              productModal={productModal}
              onClickOnModal={() => this.showOrCloseModal()}
            ></s-cnt-market-modal-window>
          ) : (
            ""
          )}
          <s-cnt-market-footer footerData={footerData}></s-cnt-market-footer>
          <s-cnt-market-back-to-top></s-cnt-market-back-to-top>
        </main>
      </div>
    );
  }

  /**
   * Вызов модального окна компонента входа
   */
  public openLoginModal() {
    this.loginRegistrationCompleted = true;
    this.loginCompleted = true;
    this.registrationCompleted = false;
    document.body.style.overflow= 'hidden'
  }

  /**
   * Закрытие модального окна компонента входа
   */
  public closeLoginModal() {
    this.loginRegistrationCompleted = false;
    document.body.style.overflow= ''
  }

  /**
   * открытие блока/компонента входа при открытии модального окна
   */
  public openLogin() {
    this.loginCompleted = true;
    this.registrationCompleted = false;
  }

  /**
   * открытие блока/компонента регистрации при открытии модального окна
   */
  public openRegistration() {
    this.registrationCompleted = true;
    this.loginCompleted = false;
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
