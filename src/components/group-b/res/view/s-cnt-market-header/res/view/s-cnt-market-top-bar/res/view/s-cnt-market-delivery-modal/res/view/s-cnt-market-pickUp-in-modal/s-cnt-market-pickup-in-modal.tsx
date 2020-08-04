import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 's-cnt-market-pickup-in-modal',
  styleUrl: 's-cnt-market-pickup-in-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketPickupInModal implements ComponentInterface {

  render() {
    return (
      <div class="adress-in-city-blocks">
        <div class="option-city-modal-intop-bar">
          <i class="fas fa-map-marker-alt"></i>
          <span>
            Город:
          </span>
          <div class="city-option-for-selected">
            Москва
            <span>
              <i class="fas fa-angle-down"></i>
            </span>
          </div>
        </div>
        <div class="expandable-store-list">
          <div class="store-list-wrapper">
            <div class="store-list">
              <div class="store-list-block-wrap">
                <div class="store-list-logo-img">
                  <div
                    style={{backgroundImage: "url(https://sbermarket.ru/spree/retailer/icons/234559/original/1.png?1580316602)"}}>
                    {/*картинка лого*/}
                  </div>
                </div>
                <div class="store-list-name">
                  Metro
                </div>
              </div>
              <div class="number-of-stores">
                8 магазинов
              </div>
              <div class="list-stores-open-icon">
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
