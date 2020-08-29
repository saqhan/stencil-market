import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-contacts",
  styleUrl: "s-cnt-market-ordering-contacts.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingContacts implements ComponentInterface {
  /**
   * Данные для панели контакты
   */
  @Prop() contacts: any;

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
            onClick={() => this.addClassActiveHandler({ step: 2 })}
          >
            <div class="panel-header-desc">
              <div class="panel-header-indicator">{this.contacts.id}</div>
              <div class="panel-header-text">{this.contacts.title}</div>
            </div>
            <div class="panel-header-details">
              <div class="panel-header-detail">{this.contacts.email}</div>
              <div class="panel-header-detail">{this.contacts.phone}</div>
            </div>
            <div class="panel-header-link">
              <a>{this.contacts.link}</a>
            </div>
          </div>
          <div class="ordering-panel-hide">
            <div class="panel-content">
              <div class="ordering-form-container">
                <div class="contact-inputs-wrapper">
                  <div class="contact-inputs">
                    <div class="contact-inputs-inline">
                      <div class="contact-input">
                        <div>
                          <input
                            type="text"
                            placeholder="Имя"
                            class="ordering-input ordering-input-error"
                          />
                          <div class="input-desc-error">Укажите имя</div>
                        </div>
                      </div>
                      <div class="contact-input">
                        <div>
                          <input
                            type="text"
                            placeholder="Фамилия"
                            class="ordering-input ordering-input-error"
                          />
                          <div class="input-desc-error">Укажите фамилию</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="contact-inputs">
                    <div class="contact-input">
                      <div>
                        <input
                          type="text"
                          placeholder="Email"
                          class="ordering-input ordering-input-error"
                        />
                        <div class="input-desc-error">Укажите email</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ordering-phones">
                  <div class="ordering-phones-title">
                    Телефон для sms оповещений
                  </div>
                  <div class="ordering-form ordering-form-block">
                    <div class="inline-items">
                      <div class="phone-input">
                        <div class="ordering-form-input">
                          <input
                            class="ordering-input ordering-input-phone"
                            value="+7 ___ ___-__-__"
                          />
                          <div class="input-desc-error">
                            Некорректный номер телефона
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="promo-agreement">
                    <div class="checkbox">
                      <div class="checkbox-label checkbox-label-active">
                        <input type="checkbox" class="agreement-checkbox" />
                        <span>Отправлять информацию о заказе на email</span>
                        <div class="checkbox-error"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <button
                    type="button"
                    onClick={() => this.removeClassActiveHandler({ step: 2 })}
                  >
                    {this.contacts.btn}
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
