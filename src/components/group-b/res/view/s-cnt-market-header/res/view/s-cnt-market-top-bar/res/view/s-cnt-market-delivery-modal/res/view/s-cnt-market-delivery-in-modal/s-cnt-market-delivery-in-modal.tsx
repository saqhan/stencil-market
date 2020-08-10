import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {TopBarModalDeliveryInterface} from "./res/interface/common.interface";

@Component({
  tag: 's-cnt-market-delivery-in-modal',
  styleUrl: 's-cnt-market-delivery-in-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketDeliveryModal implements ComponentInterface {
  /**
   * Props значение для принятия и вывода данных
   */
  @Prop() deliveryData: TopBarModalDeliveryInterface;

  render() {
    return (
      <div class="block-entering-delivery-address">
        <div class="text-before-input">
          {this.deliveryData.enterAddressText}
        </div>
        <div class="map-block-wrapper">
          <div class="map-input-wrap">
            <input class="map-input-wrap-inner" type="text" placeholder="Введите текст"/>
            <div class="map-input-icon">
              <i class={this.deliveryData.searchIcon}></i>
            </div>
            <button class="map-addres-save-btn">
              {this.deliveryData.btnText}
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
