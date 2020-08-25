import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';
import {MarketTopBarModalInterface} from "../../../../../../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-delivery-modal',
  styleUrl: 's-cnt-market-delivery-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketDeliveryModal implements ComponentInterface {
  /**
   * объект из mock для вывода данных в компоненте модального окна
   */
  @Prop() modalData: MarketTopBarModalInterface;

  /**
   * boolean значение для вывода/закрытия блока доставки и присвоения класса
   */
  @Prop() delivery: boolean;

  /**
   * boolean значение для вывода/закрытия блока самовывоза и присвоения класса
   */
  @Prop() pickUp: boolean;

  /**
   * Закрытие модального модального окна выбора адреса
   */
  @Event() closeForm: EventEmitter;

  /**
   * Закрытие модального модального окна
   */
  @Event() openLogin: EventEmitter;

  /**
   * функция для смены значения boolean пропса delivery
   */
  @Event() openDelivery: EventEmitter;

  /**
   * функция для смены значения boolean пропса pickUp
   */
  @Event() openPickUp: EventEmitter;

  /**
   * функция для смены значения boolean пропса pickUp
   */
  @Event() idSelectionAddress: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;

  render() {
    return (
      <div class="delivery-modal-main-block-wrapper">
        <div class="delivery-modal-other-opacity" onClick={(event) => this.clickPopUp(event)}
             ref={(el) => this.ourModal = el}>
          {/*opacity background модального окна*/}
        </div>
        <div class="delivery-modal-main-block">
          <div class="delivery-modal-block-position">
            <div class="delivery-modal-block-wrapper">
              <div class="delivery-modal-block">
                <div class="close-btn-wrapper">
                  <button class="close-btn" onClick={() => this.closeForm.emit()}>
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <div class="choose-way-to-get-block">
                  <div class="method-of-obtaining-title-block">
                    <div class="method-of-obtaining-title">
                      {this.modalData.modalWindowTitle}
                    </div>
                    <div class="suggestions-signIn-in-modal-top-bar">
                      {this.modalData.offerToEnter}
                      <span onClick={() => this.openLoginHandler()}>
                        {this.modalData.offerToEnterLink}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="option-pickUp-or-delivery-block-wrapper">
                  <div class="option-pickUp-or-delivery-block">
                    <button class="option-delivery" id={this.delivery ? 'option-delivery-selected' : ''}
                            onClick={() => this.openDelivery.emit()}>
                      {this.modalData.choiceDelivery}
                    </button>
                    <button class="option-pickUp" id={this.pickUp ? 'option-delivery-selected' : ''}
                            onClick={() => this.openPickUp.emit()}>
                      {this.modalData.choicePickUp}
                    </button>
                  </div>
                </div>
                {
                  this.delivery ?
                    <s-cnt-market-delivery-in-modal deliveryData={this.modalData.Delivery}/> :
                    ''
                }
                {
                  this.pickUp ?
                    <s-cnt-market-pickup-in-modal pickUpData={this.modalData.PickUp}/> :
                    ''
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Вызов функции закрытия модального окна при условиии что нажал не на блок модалки
   */
  public clickPopUp(event) {
    if (event.target === this.ourModal) {
      this.closeForm.emit()
    }
  };

  /**
   * Вызов функции открытия модального компонента входа/регистрации
   */
  public openLoginHandler() {
    this.openLogin.emit();
    this.closeForm.emit();
  };

}
