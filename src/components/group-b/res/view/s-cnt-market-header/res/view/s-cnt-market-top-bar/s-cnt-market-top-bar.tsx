import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';
import {TopBarInterface} from "./res/interface/common.interface";

@Component({
  tag: 's-cnt-market-top-bar',
  styleUrl: 's-cnt-market-top-bar.css',
  shadow: false,
  scoped: true
})
export class SCntMarketTopBar implements ComponentInterface {
  /**
   * объект данных для компонента top-bar и его подкомпонентов
   */
  @Prop() topBar: TopBarInterface;

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
          this.loginRegistrationCompleted ?
            <s-cnt-market-login-and-registration-form login={this.loginCompleted}
                                                      registration={this.registrationCompleted}
                                                      onCloseLogin={() => this.closeModal('login')}
                                                      onOpenLogin={() => this.openBlock('login')}
                                                      onOpenRegistration={() => this.openBlock('registration')}
            ></s-cnt-market-login-and-registration-form> :
            ''
        }
        <div class="container top-bar-content-outer-block">
          <div class="top-bar-content-inner-block">
            <div class="top-bar-delivery-and-adress">
              <div class="top-bar-delivery-option-block" id={this.pickUpCompleted ? 'selected-dilivery' : ''}>
                <button class="selection-by-delivery" onClick={() => {
                  this.openModal('address');
                  this.openBlock('delivery');
                }}>
                  {this.topBar.choiceDelivery}
                </button>
                <button class="selection-by-pickUp" onClick={() => {
                  this.openModal('address');
                  this.openBlock('pickUp');
                }}>
                  {this.topBar.choicePickUp}
                </button>
              </div>
              <div class="option-adress-text-block" onClick={() => {
                this.openModal('address');
                this.openBlock('delivery');
              }}>
                <span>
                  <span class={this.idAddress ? 'selected-address' : ''}>
                    {this.idAddress ? this.idAddress : this.topBar.choiceAddress}
                  </span>
                  <button class="delivery-adress-btn">
                    <i class={this.topBar.choiceAddressIcon}></i>
                  </button>
                </span>
              </div>
              <p class="shortest-delivery-time">
                {this.topBar.timeOfDeliveryText}
                <span>
                  {this.topBar.timeOfDelivery}
                </span>
              </p>
              <div class="top-bar-number-wrapper">
                <a href={"tel:" + this.topBar.phoneNumber} class="phone-number-link">
                  <span class="phone_number">
                    {this.topBar.phoneNumber}
                  </span>
                  <span class="phone-work">
                    <span>
                      {this.topBar.workingHours}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {
          this.addressCompleted ?
            <s-cnt-market-delivery-modal delivery={this.deliveryCompleted}
                                         pickUp={this.pickUpCompleted}
                                         modalData={this.topBar.modalWindow}
                                         onCloseForm={() => this.closeModal('address')}
                                         onOpenDelivery={() => this.openBlock('delivery')}
                                         onOpenPickUp={() => this.openBlock('pickUp')}
                                         onIdSelectionAddress={(detail) => this.idSelectionAddress(detail)}
              // event-ы для формы входа/регистрации
                                         onOpenLogin={() => this.openModal('login')}
            /> :
            ''
        }
      </div>
    );
  }

  /**
   * Вызов модального окна
   */
  public openModal(value) {
    if (value === 'address') {
      this.addressCompleted = true;
    } else if (value === 'login') {
      this.loginRegistrationCompleted = true;
      this.loginCompleted = true;
      this.addressCompleted = false;
    }
  }
  // Handler

  /**
   * открытие блока/компонента при открытии модального окна
   */
  public openBlock(value) {
    if (value === 'delivery') {
      this.deliveryCompleted = true;
      this.pickUpCompleted = false;
    } else if (value === 'pickUp') {
      this.pickUpCompleted = true;
      this.deliveryCompleted = false;
    }else if (value === 'login') {
      this.loginCompleted = true;
      this.registrationCompleted = false;
    } else if (value === 'registration') {
      this.registrationCompleted = true;
      this.loginCompleted = false;
    }
  }

  // /**
  //  * открытие блока/компонента самовывоз при открытии модального окна
  //  */
  // public openPickUp(value) {
  //   if (value === 'address') {
  //     this.pickUpCompleted = true;
  //     this.deliveryCompleted = false;
  //   }
  // }

  /**
   * Закрытие модального окна
   */
  public closeModal(value) {
    if (value === 'address') {
      this.addressCompleted = false;
    } else if (value === 'login') {
      this.loginRegistrationCompleted = false;
    }
  }

  /**
   * функция для прослушивания значения {detail}(улицы) у блока выбранного магазина
   * */
  public idSelectionAddress({detail}) {
    this.idAddress = detail;
    if (detail !== null) {
      if (detail.lenght > 30) {
        this.idAddress = detail.slice(0, 30) + '...';
      }
    }
  }

}
