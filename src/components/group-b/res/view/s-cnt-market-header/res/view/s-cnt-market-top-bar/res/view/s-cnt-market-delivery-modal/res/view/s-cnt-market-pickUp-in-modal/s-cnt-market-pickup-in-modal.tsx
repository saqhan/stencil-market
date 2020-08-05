import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';

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

  /**
   * boolean значение для вывода компонента form-communication
   */
  @State() SroreAddress: boolean;

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
            {/*вывод списка магазинов*/}
            </span>
            <div class="selection-city-block">
              <CityForSelected arr={this.pickUpData.cityForSelected}/>
            </div>
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
              <div class="list-stores-open-icon" innerHTML={this.pickUpData.selectedStoreIcon} onClick={() => {
                this.opClStoreAddress();
                // this.closeStoreAddress();
              }}>
                {/*иконка выбора магазина*/}
              </div>
            </div>
          </div>
          {
            this.SroreAddress ?
              <SroreAddress arr={this.pickUpData.storeAddress}/> :
              ''
          }

        </div>
      </div>
    );
  }

  /**
   *  функция присвоения true или false для htmlAtribut (переменной) SroreAddress
   */
  public opClStoreAddress() {
    if (this.SroreAddress !== true) {
      this.SroreAddress = true;
    } else {
      this.SroreAddress = false;
    }
  }

  /**
   * Вызов модального окна формы
   */
  public closeStoreAddress() {
    if (this.SroreAddress === true) {
      this.SroreAddress = false;
    }
  }

}

/*
* компонентная функция для вывода блоков
 */
const SroreAddress = (props) => {
  return props.arr.map((item) => {
    return (
      <div>
        <hr/>
        <div class="store-list-wrapper">
          <div class="store-list">
            <div class="store-address-and-work-time">
                <span class="store-address">
                  {item.storeAddress}
                </span>
              <span class="store-work-time">
                  {item.storeWorkTime}
                </span>
            </div>
            <button class="store-secet-btn">
              {item.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  })
}

/**
 * компонентная функция для вывода флага и кода выбранной страны
 **/
const CityForSelected = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="city-for-selected">
        {item.city}
      </div>
    );
  })
}
