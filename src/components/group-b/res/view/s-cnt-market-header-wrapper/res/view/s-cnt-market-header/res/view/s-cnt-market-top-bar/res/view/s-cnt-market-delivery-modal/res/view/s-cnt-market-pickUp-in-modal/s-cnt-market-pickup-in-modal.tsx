import {Component, ComponentInterface, EventEmitter, h, Prop, State, Event} from '@stencil/core';
import {MarketTopBarModalPickUpInterface} from "../../../../../../../../../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-pickup-in-modal',
  styleUrl: 's-cnt-market-pickup-in-modal.css',
  shadow: false,
  scoped: true
})
export class SCntMarketPickupInModal implements ComponentInterface {
  /**
   * Данные из объекта мок
   */
  @Prop() pickUpData: MarketTopBarModalPickUpInterface;

  /**
   * значение number для присвоения id выбранного города
   */
  @State() idCity: number;

  /**
   * boolean значение для вывода списка городов
   */
  @State() CitySelect: boolean;

  /**
   * boolean значение для вывода блоков магазинов
   */
  @State() StoreAddress: boolean;

  /**
   * boolean значение для вывода блока самовывоза и присвоения класса
   */
  @State() idAddress: number;

  /**
   * функция для смены значения boolean пропса pickUp
   */
  @Event() idSelectionAddress: EventEmitter;

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
        <div class="option-city-modal-intop-bar">
          <i class={this.pickUpData.locationIcon}></i>
          <span>
            {this.pickUpData.city}
          </span>
          <div class="city-option-for-selected" onClick={() => this.openCityList()}>
            <SelectedCityFunctionalComponent
              arr={this.pickUpData.cityForSelected}
              idCity={this.idCity}
            ></SelectedCityFunctionalComponent>
            <span>
              <i class={this.pickUpData.selectIcon}></i>
            </span>
            {
              this.CitySelect ? (
                //выводящийся и закрывающийся блок списка городов по клику меняющеегося State
                <div>
                  <div class="selection-city-block-backg">
                  {/*opacity для закрытия блока выбора выбора города*/}
                  </div>
                  <div class="selection-city-block">
                    <CityForSelectedFunctionalComponent arr={this.pickUpData.cityForSelected}
                                                        idSelected={(x) => this.idSelected(x)}
                    />
                  </div>
                </div>
              ) : (
                ''
              )
            }
          </div>
        </div>
        <div class="expandable-store-list" onClick={() => this.opClStoreAddress()}>
          <div class="store-list-wrapper">
            <div class="store-list">
              <div class="store-list-block-wrap">
                <div class="store-list-logo-img">
                  <div style={{backgroundImage: "url(" + this.pickUpData.logoImg + ")"}}>
                    {/*картинка лого*/}
                  </div>
                </div>
                <div class="store-list-name">
                  <span class="store-name">
                    {this.pickUpData.storeName}
                  </span>
                  <SelectedAddressFunctionalComponent
                    arr={this.pickUpData.cityForSelected}
                    idCity={this.idCity}
                    idAddress={this.idAddress}
                  ></SelectedAddressFunctionalComponent>
                </div>
              </div>
              <div>
                {/*количество магазинов из длины массива и текст из объекта вызванная из функции*/}
                <StoreQuantityFunctionalComponent
                  pickUpData={this.pickUpData}
                  idCity={this.idCity}
                  idAddress={this.idAddress}
                ></StoreQuantityFunctionalComponent>
              </div>
              <div>
                <IconOrButtonFunctionalComponent
                  idAddress={this.idAddress}
                  StoreAddress={this.StoreAddress}
                  pickUpData={this.pickUpData}
                ></IconOrButtonFunctionalComponent>
              </div>
            </div>
          </div>
          {
            this.StoreAddress ? (
              //выводящийся и закрывающийся блок с адресами магазинов по клику меняющему State
              <StoreAddressCompFunctionalComponent
                cityForSelected={this.pickUpData.cityForSelected}
                idCity={this.idCity}
                idSelectionAddressInside={(x) => this.idSelectionAddressInside(x)}
                idSelectionAddress={(x) => this.idSelectionAddress.emit(x)}
                idSelectedAddress={(x, y) => this.idSelectedAddress(x, y)}
              ></StoreAddressCompFunctionalComponent>
            ) : (
              ''
            )
          }
        </div>
      </div>
    );
  }

  /**
   * функция для присвоения id выбранного города
   * */
  public idSelected(x) {
    this.idCity = x;
    this.idAddressNull();
  }

  /**
   * функция для присвоения id выбранного address
   * */
  public idSelectionAddressInside(x) {
    this.idAddress = x;
  }

  /**
   * Вывод количества магазинов
   */
  public idAddressNull() {
    if (typeof this.idCity != 'undefined') {
      this.idAddress = null;
    }
  }

  /**
   * функция для присвоения id выбранного address
   * */
  public idSelectedAddress(x, y) {
    if (x === this.idAddress) {
      return y;
    }
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

/**
 * Вывод выбранного города
 */
const SelectedCityFunctionalComponent = (props) => {
  return props.arr.map(item => {
    if (props.idCity === item.id) {
      return (
        <span>
          {item.city}
        </span>
      );
    }
  })
}

/**
 * компонентная функция для вывода списка городов при выборе города
 **/
const CityForSelectedFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="city-for-selected" onClick={() => props.idSelected(item.id)}>
        {item.city}
      </div>
    );
  })
}

/**
 * Вывод выбранного адресов магазинов выбранного города
 */
const SelectedAddressFunctionalComponent = (props) => {
  return props.arr.map(item => {
    if (props.idCity === item.id) {
      return item.storeAddress.map(i => {
        if (props.idAddress === i.id) {
          return (
            <span class="store-selected-address">
                {i.storeAddress}
              </span>
          );
        }
      })
    }
  })
}

/**
 * Вывод количества магазинов
 */
const StoreQuantityFunctionalComponent = (props) => {
  if (typeof props.idAddress != 'number') {
    return (
      <div class="number-of-stores">
        {
          props.pickUpData.cityForSelected.map(item => {
            if (props.idCity === item.id) {
              return (
                item.storeAddress.length + ' ' + props.pickUpData.numberOfStores
              )
            }
          })
        }
      </div>
    );
  }
}

/**
 * Изменение Иконок на button при выборе магазина
 */
const IconOrButtonFunctionalComponent = (props) => {
  if (typeof props.idAddress != 'number') {
    return (
      <div class="list-stores-open-icon">
        <i class={props.StoreAddress ? props.pickUpData.selectedStoreIcon : props.pickUpData.storeWithdrawalIcon}></i>
      </div>
    );
  } else {
    return (
      <button class="store-secet-btn" id='updateSelectedAddress'>
        {props.pickUpData.updateSelectedAddress}
      </button>
    );
  }
}

/**
 * компонентная функция для вывода блоков списка магазинов
 */
const StoreAddressCompFunctionalComponent = (props) => {
  return props.cityForSelected.map(item => {
    if (props.idCity === item.id) {
      return item.storeAddress.map((item) => {
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
                <button class="store-secet-btn" id={props.idSelectedAddress(item.id, 'selectedAddress')}
                        onClick={() => {
                          props.idSelectionAddress(item.storeAddress);
                          props.idSelectionAddressInside(item.id);
                        }}>
                  <i class={props.idSelectedAddress(item.id, 'fas fa-check mr-1')}></i>
                  {item.btnText}
                </button>
              </div>
            </div>
          </div>
        );
      })
    }
  })
}
