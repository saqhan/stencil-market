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
   *
   */
  @Prop()topBar: TopBarInterface;

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
                  this.openDelivery();
                }}>
                  {this.topBar.choiceDelivery}
                </button>
                <button class="selection-by-pickUp" onClick={() => {
                  this.openModal();
                  this.openpickUp();
                }}>
                  {this.topBar.choicePickUp}
                </button>
              </div>
              <div class="option-adress-text-block" onClick={() => {
                this.openModal();
                this.openDelivery();
              }}>
                <span>
                  {this.topBar.choiceAddress}
                  <button class="delivery-adress-btn" innerHTML={this.topBar.choiceAddressIcon}>

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
                <a href="tel:+78002221100" class="phone-number-link">
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
          this.modalComplited ?
            <s-cnt-market-delivery-modal delivery={this.deliveryComplited}
                                         pickUp={this.pickUpComplited}
                                         modalData={this.topBar.modalWindow}
                                         onCloseForm={() => this.closeModal()}
                                         onOpenDelivery={() => this.openDelivery()}
                                         onOpenpickUp={() => this.openpickUp()}
            /> :
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
