import {Component, ComponentInterface, h, State} from '@stencil/core';

@Component({
  tag: 's-cnt-market-top-bar',
  styleUrl: 's-cnt-market-top-bar.css',
  shadow: false,
  scoped: true
})
export class SCntMarketTopBar implements ComponentInterface {
  /**
   * boolean значение для вывода
   */
  @State() modalComplited: boolean;

  /**
   * boolean значение для вывода
   */
  @State() deliveryComplited: boolean;

  /**
   * boolean значение для вывода
   */
  @State() pickUpComplited: boolean;

  render() {
    return (
      <div class="container-fluid parent-block-top-bar">
        <div class="container top-bar-content-outer-block">
          <div class="top-bar-content-inner-block">
            <div class="top-bar-delivery-and-adress">
              <div class="top-bar-delivery-option-block">
                <button class="selection-by-delivery" onClick={() => {
                  this.openModal();
                  this.openDelivery()
                }}>
                  Доставка
                </button>
                <button class="selection-by-pickUp" onClick={() => {
                  this.openModal();
                  this.openpickUp()
                }}>
                  Самовывоз
                </button>
              </div>
              <div class="option-adress-text-block">
                <span>
                  Выберите адрес доставки
                  <button class="delivery-adress-btn">
                    <i class="fas fa-pencil-alt"></i>
                  </button>
                </span>
              </div>
              <p class="shortest-delivery-time">
                🚛 Ближайшая доставка
                <span>
                  сегодня, 19:00-21:00
                </span>
              </p>
              <div class="top-bar-number-wrapper">
                <a href="tel:+78002221100" class="phone-number-link">
                  <span class="phone_number">
                    +7 800 222-11-00
                  </span>
                  <span class="phone-work">
                    <span>
                      Круглосуточно
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {
          this.modalComplited ?
            <s-cnt-market-delivery-modal onCloseForm={() => {
              this.closeModal();
            }}/> :
            ''
        }
      </div>
    );
  }

  /**
   * Вызов модального окна формы
   */
  public openModal() {
    this.modalComplited = true;
  }

  /**
   * Вызов модального окна формы
   */
  public openDelivery() {
    this.deliveryComplited = true;
    this.pickUpComplited = false;
  }

  /**
   * Вызов модального окна формы
   */
  public openpickUp() {
    this.pickUpComplited = true;
    this.deliveryComplited = false;
  }

  /**
   * Закрытие модального окна формы
   */
  public closeModal() {
    this.modalComplited = false;
  }

}
