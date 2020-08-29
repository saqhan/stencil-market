import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-payment",
  styleUrl: "s-cnt-market-ordering-payment.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingPayment implements ComponentInterface {
  /**
   * Данные для панели метод получения
   */
  @Prop() payment: any;

  /**
   * Стейт для переключения класса active
   */
  @Prop() addOrRemoveClassState: boolean;

  /**
   *Добавление класса active
   */
  @Event() addClassActive: EventEmitter;

  /**
   *Удаление класса active
   */
  @Event() removeClassActive: EventEmitter;

  render() {
    return (
      <div class={this.addOrRemoveClassState ? "active" : ""}>
        <div class="ordering-panel">
          <div
            class="panel-header collapsed"
            onClick={() => this.addClassActiveHandler({ step: 4 })}
          >
            <div class="panel-header-desc">
              <div class="panel-header-indicator">{this.payment.id}</div>
              <div class="panel-header-text">{this.payment.title}</div>
            </div>
            <div class="panel-header-details">
              <div class="panel-header-detail">{this.payment.info}</div>
              <div class="panel-header-detail">{this.payment.address}</div>
            </div>
            <div class="panel-header-link">
              <a>{this.payment.link}</a>
            </div>
          </div>
          <div class="ordering-panel-hide">
            <div class="panel-content">
              <div>
                <div class="payment-method-selector">
                  <div class="payment-method payment-method-active">
                    <div class="payment-method-name">Картой онлайн</div>
                  </div>
                  <div class="payment-method">
                    <div class="payment-method-name">Переводом</div>
                  </div>
                </div>
                <s-cnt-market-ordering-payment-online
                  online={this.payment.online}
                ></s-cnt-market-ordering-payment-online>
                {/*<s-cnt-market-ordering-payment-transfer*/}
                {/*  transfer={this.payment.transfer}*/}
                {/*></s-cnt-market-ordering-payment-transfer>*/}
                <div class="button-block">
                  <button
                    onClick={() => this.removeClassActiveHandler({ step: 3 })}
                    type="button"
                  >
                    {this.payment.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Добавляет класс active
   */
  public addClassActiveHandler(step) {
    this.addClassActive.emit(step);
  }

  /**
   * Добавляет класс active
   */
  public removeClassActiveHandler(step) {
    this.removeClassActive.emit(step);
  }
}
