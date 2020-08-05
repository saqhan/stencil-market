import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';

@Component({
  tag: 's-cnt-market-pickup-in-modal',
  styleUrl: 's-cnt-market-pickup-in-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketPickupInModal implements ComponentInterface {
  /**
   * Данные из объекта данных мок
   */
  @Prop() pickUpData: any;

  /**
   * значение number для присвоения id выбранного города
   */
  @State() idCity: number;

  /**
   * значение number для присвоения id выбранного города
   */
  @State() idAddress: number;

  /**
   * boolean значение для вывода списка городов
   */
  @State() CitySelect: boolean;

  /**
   * boolean значение для вывода блоков магазинов
   */
  @State() StoreAddress: boolean;

  /**
   * присвоение id города для вывода по умолчанию
   */
  componentDidLoad() {
    this.idCity = this.pickUpData.defaultCity;
    this.StoreAddress = true;
  }

  render() {
    return (
      <div class="adress-in-city-blocks">
        <div class="option-city-modal-intop-bar" innerHTML={this.pickUpData.locationIcon}>
          {/*location Icon*/}
          <span>
            {this.pickUpData.city}
          </span>
          <div class="city-option-for-selected" onClick={() => this.openCityList()}>
            {this.selectedCity(this.pickUpData.cityForSelected)}
            <span innerHTML={this.pickUpData.selectIcon}>
            {/*icon вывода списка магазинов*/}
            </span>
            {
              this.CitySelect ?
                //выводящийся и закрывающийся блок списка городов по клику меняющеегося State
                <div class="selection-city-block">
                  <CityForSelected arr={this.pickUpData.cityForSelected} idSelected={(x) => this.idSelected(x)}/>
                </div> :
                ''
            }
          </div>
        </div>
        <div class="expandable-store-list" onClick={() => this.opClStoreAddress()}>
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
                {/*количество магазинов из длины массива и текст из объекта*/}
                {this.pickUpData.storeAddress.length + ' ' + this.pickUpData.numberOfStores}
              </div>
              <div class="list-stores-open-icon"
                   innerHTML={this.StoreAddress ? this.pickUpData.selectedStoreIcon : this.pickUpData.storeWithdrawalIcon}
              >
                {/*иконка выбора магазина*/}
              </div>
            </div>
          </div>
          {
            this.StoreAddress ?
              //выводящийся и закрывающийся блок с адресами магазинов по клику меняющему State
              <StoreAddress arr={this.pickUpData.storeAddress} idSelectedAddress={(x) => this.idSelectedAddress(x)}/> :
              ''
          }
        </div>
      </div>
    );
  }

  /**
   * Вывод выбранного города
   */
  public selectedCity(array) {
    return array.map(item => {
      if (this.idCity === item.id) {
        return (
          <span>
            {item.city}
          </span>
        );
      }
    })
  }

  /**
   * функция для присвоения id выбранного города
   * */
  public idSelected(x) {
    this.idCity = x;
  }

  /**
   * функция для присвоения id выбранного address
   * */
  public idSelectedAddress(x) {
    this.idAddress = x;
  }

  /**
   * Вызов и закрытие окна для выбора города
   */
  public openCityList() {
    this.CitySelect = !this.CitySelect;
  }

  /**
   *  функция открытия и закрытия блока списка магазинов
   */
  public opClStoreAddress() {
    this.StoreAddress = !this.StoreAddress;
  }

  /**
   * функция закрытия блока списка магазинов
   */
  public closeStoreAddress() {
    if (this.StoreAddress === true) {
      this.StoreAddress = false;
    }
  }

}

/*
* компонентная функция для вывода блоков списка магазинов
 */
const StoreAddress = (props) => {
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
            <button class="store-secet-btn" onClick={() => props.idSelectedAddress(item.id)}>
              {item.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  })
}

/**
 * компонентная функция для вывода городов при выборе города
 **/
const CityForSelected = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="city-for-selected" onClick={() => props.idSelected(item.id)}>
        {item.city}
      </div>
    );
  })
}
