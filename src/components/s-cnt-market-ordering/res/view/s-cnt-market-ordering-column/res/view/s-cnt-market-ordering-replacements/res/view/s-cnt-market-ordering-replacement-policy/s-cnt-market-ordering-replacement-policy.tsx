import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-replacement-policy",
  styleUrl: "s-cnt-market-ordering-replacement-policy.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingReplacementPolicy implements ComponentInterface {
  /**
   *Данные для панелей политика доставки
   */
  @Prop() panels: any;

  render() {
    return (
        <div class="replacement-policy">
        <label class="replacement-policy-label">
          <input type="radio" class="hidden-inp" value="1" />
          <div class="replacement-policy-desc">{this.panels.desc}</div>
        </label>
        {this.panels.icon ? (
          <div class="replacement-policy-ico-wrap">
            <i class={this.panels.icon}></i>
          </div>
        ) : (
          ""
        )}
        <div class="popover-wrapper">
          <div class="popover">
            <div class="popover-item"></div>
            <div>
              Сборщик постарается заменить товары на их близкие аналоги. Если
              аналогов не найдется, сборщик уберет эти товары из заказа
            </div>
          </div>
        </div>
      </div>
    );
  }
}
