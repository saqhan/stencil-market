import {Component, ComponentInterface, h, Prop, State} from "@stencil/core";
import {MarketTopBarInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-top-bar",
  styleUrl: "s-cnt-market-top-bar.css",
  shadow: false,
  scoped: true,
})

export class SCntMarketTopBar implements ComponentInterface {
  /**
   * объект данных для компонента top-bar и его подкомпонентов
   */
  @Prop() topBar: MarketTopBarInterface;

  /**
   * boolean значение для вывода/закрытия модального окна входа/регистрация
   */
  @State() loginRegistrationCompleted: boolean;

  /**
   * boolean значение для вывода/закрытия модального окна ввода адреса
   */
  @State() addressCompleted: boolean;

  /**
   * boolean значение для вывода блока доставка при открытии модального окна
   */
  @State() deliveryCompleted: boolean;

  /**
   * boolean значение для вывода блока доставка при открытии модального окна
   * и выделении кнопки самовывоза при его выборе посредством присвоения id родительскому блоку
   */
  @State() pickUpCompleted: boolean;

  /**
   * boolean значение для вывода блока доставка при открытии модального окна
   */
  @State() loginCompleted: boolean;

  /**
   * boolean значение для вывода блока доставка при открытии модального окна
   * и выделении кнопки самовывоза при его выборе посредством присвоения id родительскому блоку
   */
  @State() registrationCompleted: boolean;

  /**
   * значение для того чтобы читать значение улицы посредством {detail} блока выбранного магазина
   */
  @State() idAddress: string;

  render() {
    return (
      <div class="container-fluid parent-block-top-bar">
        {
          this.loginRegistrationCompleted ? (
            <s-cnt-market-login-and-registration-form
              loginAndRegistration={this.topBar.loginAndRegistration}
              login={this.loginCompleted}
              registration={this.registrationCompleted}
              onCloseLogin={() => this.closeLoginModal()}
              onOpenLogin={() => this.openLogin()}
              onOpenRegistration={() => this.openRegistration()}
            ></s-cnt-market-login-and-registration-form>
          ) : (
            ""
          )
        }
        <div class="container top-bar-content-outer-block">
          <div class="top-bar-content-inner-block">
            <div class="top-bar-delivery-and-adress">
              <div
                class="top-bar-delivery-option-block"
                id={this.pickUpCompleted ? "selected-dilivery" : ""}
              >
                <button
                  class="selection-by-delivery"
                  onClick={() => {
                    this.openDeliveryHandler();
                  }}
                >
                  {this.topBar.choiceDelivery}
                </button>
                <button
                  class="selection-by-pickUp"
                  onClick={() => {
                    this.openPickUpHandler();
                  }}
                >
                  {this.topBar.choicePickUp}
                </button>
              </div>
              <div
                class="option-adress-text-block"
                onClick={() => {
                  this.openDeliveryHandler();
                }}
              >
                <span>
                  <span class={this.idAddress ? "selected-address" : ""}>
                    {this.idAddress
                      ? this.idAddress
                      : this.topBar.choiceAddress}
                  </span>
                  <button class="delivery-adress-btn">
                    <i class={this.topBar.choiceAddressIcon}></i>
                  </button>
                </span>
              </div>
              <p class="shortest-delivery-time">
                {this.topBar.timeOfDeliveryText}
                <span>{this.topBar.timeOfDelivery}</span>
              </p>
              <div class="top-bar-number-wrapper">
                <a
                  href={"tel:" + this.topBar.phoneNumber}
                  class="phone-number-link"
                >
                  <span class="phone_number">{this.topBar.phoneNumber}</span>
                  <span class="phone-work">
                    <span>{this.topBar.workingHours}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {
          this.addressCompleted ? (
            <s-cnt-market-delivery-modal
              delivery={this.deliveryCompleted}
              pickUp={this.pickUpCompleted}
              modalData={this.topBar.modalWindow}
              onCloseForm={() => this.closeAddressModal()}
              onOpenDelivery={() => this.openDelivery()}
              onOpenPickUp={() => this.openPickUp()}
              onIdSelectionAddress={(detail) => this.idSelectionAddress(detail)}
              // event-ы для формы входа/регистрации
              onOpenLogin={() => this.openLoginModal()}
            />
          ) : (
            ""
          )
        }
      </div>
    );
  }

  /**
   * Вызов модального окна выбора адреса
   */
  public openAddressModal() {
    this.addressCompleted = true;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Закрытие модального окна выбора адреса
   */
  public closeAddressModal() {
    this.addressCompleted = false;
    document.body.style.overflow = '';
  }

  /**
   * открытие блока/компонента доставки при открытии модального окна
   */
  public openDelivery() {
    this.deliveryCompleted = true;
    this.pickUpCompleted = false;
  }

  /**
   * открытие блока/компонента доставки c открытием модального окна адреса
   */
  public openDeliveryHandler() {
    this.openDelivery();
    this.openAddressModal();
  }

  /**
   * открытие блока/компонента самовывоз при открытии модального окна
   */
  public openPickUp() {
    this.pickUpCompleted = true;
    this.deliveryCompleted = false;
  }

  /**
   * открытие блока/компонента доставки c открытием модального окна адреса
   */
  public openPickUpHandler() {
    this.openPickUp();
    this.openAddressModal();
  }

  /**
   * Вызов модального окна компонента входа
   */
  public openLoginModal() {
    this.loginRegistrationCompleted = true;
    this.loginCompleted = true;
    this.registrationCompleted = false;
  }

  /**
   * Закрытие модального окна компонента входа
   */
  public closeLoginModal() {
    this.loginRegistrationCompleted = false;
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
   * функция для прослушивания значения {detail}(улицы) у блока выбранного магазина
   * */
  public idSelectionAddress({detail}) {
    this.idAddress = detail;
    if (detail !== null) {
      if (detail.lenght > 30) {
        this.idAddress = detail.slice(0, 30) + "...";
      }
    }
  }

}
