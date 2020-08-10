import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State} from '@stencil/core';

@Component({
  tag: 's-cnt-market-store-select-top',
  styleUrl: 's-cnt-market-store-select-top.css',
  shadow: false,
  scoped: true
})
export class SCntMarketStoreSelectTop implements ComponentInterface {

  @Prop() openedStoreSelect: boolean;


  /**
   * /Закрыть корзину
   * */
  @Event() closeStoreSelect: EventEmitter;

  @State() selectStoreTag:HTMLElement;

  render() {
    return (
      <div>
        <div class={
          this.openedStoreSelect
            ? "drawer-backdrop  opened "
            : "drawer-backdrop "
        }
             ref={(el) => (this.selectStoreTag = el)}
             onClick={(event) => this.clickOnSelectStoreHandler(event)}
        ></div>
        <div class={this.openedStoreSelect ? "drawer-top drawer-transition opened " : "drawer-top drawer-transition "}>
          <div class="drawer-content">
            <div class="store-selector">

            </div>
          </div>
        </div>

      </div>
    );
  }


  /**
   * клик на открытие меню
   * */
  public clickOnSelectStoreHandler(event){
    if (event.target === this.selectStoreTag) {
      this.closeStoreSelect.emit()
    }
  }

}
