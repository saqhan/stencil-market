import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 's-cnt-market-delivery-modal',
  styleUrl: 's-cnt-market-delivery-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketDeliveryModal implements ComponentInterface {

  render() {
    return (
      <div class="delivery-modal-main-block-wrapper">

        <div class="delivery-modal-other-opacity">
          {/*opacity background модального окна*/}
        </div>
        <div class="delivery-modal-main-block">
          <div class="delivery-modal-block-position">
            <div class="delivery-modal-block-wrapper">
              <div class="delivery-modal-block">
                <div class="close-btn-wrapper">
                  <button class="close-btn">
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
                    <button class="option-delivery">
                      Доставка
                    </button>
                    <button class="option-pickUp option-delivery-selected">
                      Самовывоз
                    </button>
                  </div>
                </div>
                {/*<s-cnt-market-delivery-in-modal/>*/}
                {/*<s-cnt-market-pickup-in-modal/>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
