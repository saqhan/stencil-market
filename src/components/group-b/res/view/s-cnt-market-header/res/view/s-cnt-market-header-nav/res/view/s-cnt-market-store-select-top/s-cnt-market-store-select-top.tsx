import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import {selectShopsInterface} from "../../interface/common.interface";

@Component({
  tag: "s-cnt-market-store-select-top",
  styleUrl: "s-cnt-market-store-select-top.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketStoreSelectTop implements ComponentInterface {
  /**
   * selectShops
   * */
  @Prop() selectShops: selectShopsInterface[];

  /**
   *
   * */
  @Prop() openedStoreSelect: boolean;

  /**
   * /Закрыть корзину
   * */
  @Event() closeStoreSelect: EventEmitter;

  @State() selectStoreTag: HTMLElement;

  render() {
    return (
      <div class="drawer">
        <div
          class={
            this.openedStoreSelect
              ? "drawer-backdrop opened drawer-backdrop-transition "
              : "drawer-backdrop "
          }
          ref={(el) => (this.selectStoreTag = el)}
          onClick={(event) => this.clickOnSelectStoreHandler(event)}
        ></div>
        <div
          class={
            this.openedStoreSelect
              ? "drawer-top opened drawer-transition"
              : "drawer-top drawer-transition"
          }
        >
          <div class="drawer-content">
            <div class="store-select">
              <div class="store-select-header">
                <div class="store-select-title">
                  По вашему адресу доступно {this.selectShops.length} магазинов
                </div>
                <button class="store-select-close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="store-select-content">
                <div class="container">
                  <div class="row">{this.getSelectShops(this.selectShops)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * получение магазинов
   * */
  public getSelectShops(array): selectShopsInterface {
    return array.map((item) => {
      return (
        <div class="col-4">
          <a class="store-card">
            <div class="store-card-description">
              <div class="store-card-name">{item.title}</div>
              <div class="store-card-detail">
                {item.description}, {item.time}
              </div>
            </div>
            <div
              class="store-card-img"
              style={{
                backgroundColor: `${item.backgroundColor}`,
                backgroundImage: `url(${item.img})`
              }}
            ></div>
          </a>
        </div>
      );
    });
  }

  /**
   * клик на открытие меню
   * */
  public clickOnSelectStoreHandler(event) {
    if (event.target === this.selectStoreTag) {
      this.closeStoreSelect.emit();
    }
  }
}
