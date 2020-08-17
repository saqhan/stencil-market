import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';
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

  /**
   * Props значение для принятия и вывода данных
   */
  @State() rezBlock;

  /**
   * ref для
   * */
  searchInput: HTMLInputElement;

  /**
   * ref для
   * */
  addressItems: HTMLElement;

  componentDidLoad() {
    this.searchInput.addEventListener("input", () => this.searchAddress());
    this.searchInput.addEventListener("focus", () => this.rezBlock = true);
    this.searchInput.addEventListener("blur", () => this.rezBlock = false);
  }

  render() {
    return (
      <div class="block-entering-delivery-address">
        <div class="text-before-input">
          {this.deliveryData.enterAddressText}
        </div>
        <div class="map-block-wrapper">
          <div class="map-input-wrap">
            <input class="map-input-wrap-inner" type="search" placeholder="Введите текст"
                   ref={(el) => this.searchInput = el}
            />
            <div class='coincidence-unit-wrapper'>
              <div class='coincidence-unit-container'>
                {this.rezBlock ? this.AddressForSelected() : ''}
              </div>
            </div>
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

  /**
   * функция для проверки совпадения паролей
   * */
  public searchAddress() {
    let val = this.searchInput.value.trim();
    if (val != '') {
      this.AddressItems.forEach(function (elem) {
        if (elem.innerText.toLowerCase().search(val.toLowerCase()) == -1) {
          elem.classList.add('hide');
          elem.innerText = elem.innerText;
        } else {
          elem.classList.remove('hide');
          // let str = elem.innerText;
          // elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
        }
      })
    } else {
      this.AddressItems.forEach(function (elem) {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      })
    }

    // function insertMark(string, pos, len) {
    //   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
    // }
  }



  /**
   * перменная для создания массива из адресов
   **/
  public AddressItems = [];

  /**
   *
   **/
  public AddressForSelected() {
    return this.deliveryData.cityForSelectedDelivery.map((i) => {
      return i.storeAddress.map((item) => {
        return (

          <div class="coincidence-unit-item hide" ref={(el) => this.AddressItems.push(el)}>
            {item.storeAddress}
          </div>

        );
      })
    })
  }
}
