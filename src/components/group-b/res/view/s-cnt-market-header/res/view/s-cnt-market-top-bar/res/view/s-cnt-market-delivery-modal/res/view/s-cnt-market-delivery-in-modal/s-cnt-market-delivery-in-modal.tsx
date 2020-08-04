import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 's-cnt-market-delivery-in-modal',
  styleUrl: 's-cnt-market-delivery-in-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketDeliveryModal implements ComponentInterface {

  render() {
    return (
      <div class="block-entering-delivery-address">
        <div class="text-before-input">
          Введите адрес доставки, чтобы увидеть доступные магазины
        </div>
        <div class="map-block-wrapper">
          <div class="map-input-wrap">
            <div class="map-input-wrap-inner">
              <span>
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Введите текст"/>
              </span>
            </div>
            <button class="map-addres-save-btn">
              Сохранить
            </button>
          </div>

        </div>
      </div>
    );
  }

}
