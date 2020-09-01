import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-time-panel-item",
  styleUrl: "s-cnt-market-ordering-time-panel-item.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingTimePanelItem implements ComponentInterface {
  /**
   * Время заказа
   */
  @Prop() time: any;

  render() {
    return (
      <div class="windows-selector-item">
        <div class="windows-selector-item-btn-select">
          <span class="windows-selector-item-interval">{this.time.hours}</span>
          <div class="windows-selector-item-info">
            <div class="windows-selector-item-rate">
              <div class="windows-selector-item-rate-value">бесплатно</div>
            </div>
          </div>
        </div>
        <div class="windows-selector-item-btn-select btn-select-with-status">
          <span class="windows-selector-item-btn">
            {this.time.selected ? "Выбрано" : "Выбрать"}
          </span>
        </div>
      </div>
    );
  }
}
