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
          <div class="yandex-map-wrapper">
            <script type="text/javascript" charset="utf-8" async
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab70071f2070be1018b54df2569aa775cc14efda7d4533c91f9771c9e0ec0b19f&amp;width=746&amp;height=400&amp;lang=ru_RU&amp;scroll=true">

            </script>
          </div>

        </div>
      </div>
    );
  }

}
