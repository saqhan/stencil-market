import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-delivery-modal',
  styleUrl: 's-cnt-market-delivery-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketDeliveryModal implements ComponentInterface {
  /**
   * объект из mock для вывода данных
   */
  @Prop() modalData: any;

  /**
   * boolean значение для вывода блока доставки и присвоения класса
   */
  @Prop() delivery: boolean;

  /**
   * boolean значение для вывода блока самовывоза и присвоения класса
   */
  @Prop() pickUp: boolean;

  /**
   * Закрытие модального модального окна
   */
  @Event() closeForm: EventEmitter;

  /**
   * функция для смены значения boolean пропса delivery
   */
  @Event() openDelivery: EventEmitter;

  /**
   * функция для смены значения boolean пропса pickUp
   */
  @Event() openpickUp: EventEmitter;

  /**
   * функция для смены значения boolean пропса pickUp
   */
  @Event()idSelectionAddress: EventEmitter;

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
                    X
                  </button>
                </div>
                <div class="choose-way-to-get-block">
                  <div class="method-of-obtaining-title-block">
                    <div class="method-of-obtaining-title">
                      {this.modalData.modalWindowTitle}
                    </div>
                    <div class="suggestions-signIn-in-modal-top-bar">
                      {this.modalData.offerToEnter}
                      <span>
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
                            onClick={() => this.openpickUp.emit()}>
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
   * Вызов функции закрытия модального окна при условиии что нажал не на блок модальки
   */
  public clickPopUp(event) {
    if (event.target === this.ourModal) {
      this.closeForm.emit()
    }
  };

}
