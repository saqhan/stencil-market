import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Event,
  Prop,
} from "@stencil/core";

import { markdown } from "markdown";

@Component({
  tag: "s-cnt-market-ordering-method",
  styleUrl: "s-cnt-market-ordering-method.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingMethod implements ComponentInterface {
  /**
   * Данные для панели метод получения
   */
  @Prop() method: any;

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
            onClick={() => this.addClassActiveHandler({ step: 1 })}
          >
            <div class="panel-header-desc">
              <div class="panel-header-indicator">{this.method.id}</div>
              <div class="panel-header-text">{this.method.title}</div>
            </div>
            <div class="panel-header-details">
              <div class="panel-header-detail">{this.method.info}</div>
              <div class="panel-header-detail">{this.method.address}</div>
            </div>
            <div class="panel-header-link">
              <a>{this.method.link}</a>
            </div>
          </div>
          <div class="ordering-panel-hide">
            <div class="panel-content">
              <div class="shipping-method">
                <div class="shipping-method-header">Самовызов из магазина</div>
                <div class="shipping-method-body">
                  <div class="store-panel">
                    <div
                      class="store-panel-logo"
                      style={{
                        backgroundImage: `url(${this.method.content.img})`,
                      }}
                    ></div>
                    <div class="store-panel-text">
                      <div class="store-panel-name">
                        {this.method.content.shop}
                      </div>
                      <div class="store-panel-address">
                        {this.method.address}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shipping-method-footer">
                  <div class="shipping-message">
                    <div class="message-icon">
                      <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div
                      class="message-text"
                      innerHTML={markdown.toHTML(this.method.content.desc)}
                    ></div>
                  </div>
                </div>
                <button
                  onClick={() => this.removeClassActiveHandler({ step: 1 })}
                >
                  {this.method.btn}
                </button>
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
