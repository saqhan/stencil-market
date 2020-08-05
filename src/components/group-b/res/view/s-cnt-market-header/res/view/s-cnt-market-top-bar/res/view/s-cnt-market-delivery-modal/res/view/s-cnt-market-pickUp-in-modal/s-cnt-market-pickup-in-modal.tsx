import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-pickup-in-modal',
  styleUrl: 's-cnt-market-pickup-in-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketPickupInModal implements ComponentInterface {
  /**
   * boolean значение для вывода
   */
  @Prop() pickUpData: any;

  render() {
    return (
      <div class="adress-in-city-blocks">
        <div class="option-city-modal-intop-bar" innerHTML={this.pickUpData.locationIcon}>
          {/*location Icon*/}
          <span>
            {this.pickUpData.city}
          </span>
          <div class="city-option-for-selected">
            {this.pickUpData.selectedCity}
            <span innerHTML={this.pickUpData.selectIcon}>

            </span>
          </div>
        </div>
        <div class="expandable-store-list">
          <div class="store-list-wrapper">
            <div class="store-list">
              <div class="store-list-block-wrap">
                <div class="store-list-logo-img">
                  <div
                    style={{backgroundImage: "url(" + this.pickUpData.logoImg + ")"}}>
                    {/*картинка лого*/}
                  </div>
                </div>
                <div class="store-list-name">
                  {this.pickUpData.storeName}
                </div>
              </div>
              <div class="number-of-stores">
                {this.pickUpData.numberOfStores}
              </div>
              <div class="list-stores-open-icon" innerHTML={this.pickUpData.selectedStoreIcon}>
                {/*иконка выбора магазина*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
