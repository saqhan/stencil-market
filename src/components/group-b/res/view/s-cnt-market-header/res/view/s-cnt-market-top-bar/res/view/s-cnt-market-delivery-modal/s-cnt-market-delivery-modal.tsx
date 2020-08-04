import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-delivery-modal',
  styleUrl: 's-cnt-market-delivery-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketDeliveryModal implements ComponentInterface {

  /**
   * boolean значение для вывода
   */
  @Prop()delivery: boolean;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  /**
   * Закрытие модального окна формы
   */
  @Event() openDelivery: EventEmitter;

  /**
   * Закрытие модального окна формы
   */
  @Event() openpickUp: EventEmitter;

  /**
   * boolean значение для вывода
   */
  @Prop()pickUp: boolean;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;

  render() {
    return (
      <div class="delivery-modal-main-block-wrapper">
        <div class="delivery-modal-other-opacity" onClick={ (event) => this.clickPopUp(event)}  ref={(el) => this.ourModal = el}>
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
                      Выберите способ получения
                    </div>
                    <div class="suggestions-signIn-in-modal-top-bar">
                      Уже зарегистрированы?
                      <span>
                        Войти
                      </span>
                    </div>
                  </div>
                </div>
                <div class="option-pickUp-or-delivery-block-wrapper">
                  <div class="option-pickUp-or-delivery-block">
                    <button class="option-delivery" id={this.delivery? 'option-delivery-selected': ''} onClick={() => this.openDelivery.emit()}>
                      Доставка
                    </button>
                    <button class="option-pickUp" id={this.pickUp? 'option-delivery-selected': ''} onClick={() => this.openpickUp.emit()}>
                      Самовывоз
                    </button>
                  </div>
                </div>
                {
                  this.delivery ?
                    <s-cnt-market-delivery-in-modal/>:
                    ''
                }
                {
                  this.pickUp ?
                    <s-cnt-market-pickup-in-modal/>:
                    ''
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidLoad(){
    console.log(this.delivery)
  }
  /**
   * Вызов функции вывода меню при условии совпадения таргета клика с нужным узлом
   */
  public clickPopUp (event) {
    if (event.target === this.ourModal){
      this.closeForm.emit()
    }
  };

}
