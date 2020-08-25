import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";
import { MarketTopBarModalDeliveryInterface } from "../../../../../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-delivery-in-modal",
  styleUrl: "s-cnt-market-delivery-in-modal.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketDeliveryModal implements ComponentInterface {
  /**
   * Props значение для принятия и вывода данных
   */
  @Prop() deliveryData: MarketTopBarModalDeliveryInterface;

  /**
   * Props значение для принятия и вывода данных
   */
  @State() rezBlock;

  /**
   * ref для доступа к инпута поиска
   * */
  searchInput: HTMLInputElement;

  componentDidLoad() {
    this.searchInput.addEventListener("input", () => this.searchAddress());
    this.searchInput.addEventListener("focus", () => (this.rezBlock = true));
    this.searchInput.addEventListener("blur", () => (this.rezBlock = false));
  }

  disconnectedCallback() {
    this.searchInput.removeEventListener("input", () => this.searchAddress());
    this.searchInput.removeEventListener("focus", () => (this.rezBlock = true));
    this.searchInput.removeEventListener("blur", () => (this.rezBlock = false));
  }

  render() {
    return (
      <div class="block-entering-delivery-address">
        <div class="text-before-input">
          {this.deliveryData.enterAddressText}
        </div>
        <div class="map-block-wrapper">
          <div class="map-input-wrap">
            <input
              class="map-input-wrap-inner"
              type="search"
              placeholder="Введите текст"
              ref={(el) => (this.searchInput = el)}
            />
            <div class="coincidence-unit-wrapper">
              <div class="coincidence-unit-container">
                {this.rezBlock ? (
                  <AddressForSelectedFunctionalComponent
                    arr={this.deliveryData.cityForSelectedDelivery}
                    AddressItems={this.AddressItems}
                  />
                ) : (
                  ""
                )}
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
            <script
              type="text/javascript"
              charset="utf-8"
              async
              src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab70071f2070be1018b54df2569aa775cc14efda7d4533c91f9771c9e0ec0b19f&amp;width=746&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
            ></script>
          </div>
        </div>
      </div>
    );
  }

  /**
   * функция для поиска
   * */
  public searchAddress() {
    let val = this.searchInput.value.trim();
    if (val != "") {
      this.AddressItems.forEach(function (elem) {
        if (elem.innerText.toLowerCase().search(val.toLowerCase()) == -1) {
          elem.classList.add("hide");
          elem.innerText = elem.innerText;
        } else {
          elem.classList.remove("hide");
          let str = elem.innerText;
          elem.innerHTML = insertMark(
            str,
            elem.innerText.toLowerCase().search(val.toLowerCase()),
            val.toLowerCase().length
          );
        }
      });
    } else {
      this.AddressItems.forEach(function (elem) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      });
    }

    /**
     * функция для выделения совпадения букв при написанных в инпут
     * */
    function insertMark(string, pos, len) {
      return (
        string.slice(0, pos) +
        "<mark>" +
        string.slice(pos, pos + len) +
        "</mark>" +
        string.slice(pos + len)
      );
    }
  }

  /**
   * перменная для создания массива из адресов
   **/
  public AddressItems = [];
}

/**
 * компонентная функция для вывода адресов магазинов при совпадении в поиске
 **/
const AddressForSelectedFunctionalComponent = (props) => {
  return props.arr.map((i) => {
    return i.storeAddress.map((item) => {
      return (
        <div
          class="coincidence-unit-item hide"
          ref={(el) => props.AddressItems.push(el)}
        >
          {item.storeAddress}
        </div>
      );
    });
  });
};
