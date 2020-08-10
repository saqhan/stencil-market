import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-store-select-top",
  styleUrl: "s-cnt-market-store-select-top.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketStoreSelectTop implements ComponentInterface {
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
        <div class={this.openedStoreSelect ? "drawer-top opened drawer-transition" : "drawer-top drawer-transition"}>
          <div class="drawer-content">
            <div class="store-select">
              <div class="store-select-header">
                <div class="store-select-title">По вашему адресу доступен 1 магазин:
                </div>
                <button class='store-select-close' >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="store-select-content">
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <a class='store-card'>
                        <div class="store-card-description">
                          <div class="store-card-name">METRO</div>
                          <div class="store-card-detail">Ближайшая доставка завтра, 09:00-12:00</div>
                        </div>
                        <div class="store-card-img"
                             style={{backgroundImage:'url(https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580)'}}
                        ></div>
                      </a>
                    </div>
                    <div class="col-4">
                      <a class='store-card'>
                        <div class="store-card-description">
                          <div class="store-card-name">METRO</div>
                          <div class="store-card-detail">Ближайшая доставка завтра, 09:00-12:00</div>
                        </div>
                        <div class="store-card-img"
                             style={{backgroundImage:'url(https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580)'}}
                        ></div>
                      </a>
                    </div>
                    <div class="col-4">
                      <a class='store-card'>
                        <div class="store-card-description">
                          <div class="store-card-name">METRO</div>
                          <div class="store-card-detail">Ближайшая доставка завтра, 09:00-12:00</div>
                        </div>
                        <div class="store-card-img"
                             style={{backgroundImage:'url(https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580)'}}
                        ></div>
                      </a>
                    </div>
                    <div class="col-4">
                      <a class='store-card'>
                        <div class="store-card-description">
                          <div class="store-card-name">METRO</div>
                          <div class="store-card-detail">Ближайшая доставка завтра, 09:00-12:00</div>
                        </div>
                        <div class="store-card-img"
                             style={{backgroundImage:'url(https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580)'}}
                        ></div>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
