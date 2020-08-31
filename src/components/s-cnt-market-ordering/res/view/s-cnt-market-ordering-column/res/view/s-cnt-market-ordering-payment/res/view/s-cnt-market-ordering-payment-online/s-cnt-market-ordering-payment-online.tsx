import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-payment-online",
  styleUrl: "s-cnt-market-ordering-payment-online.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingPaymentOnline implements ComponentInterface {
  /**
   * Данные для раздела онлайн оплата
   */
  @Prop() online: any;

  /**
   *
   */
  public inputCardTag: HTMLInputElement;

  /**
   *
   * */
  public inputCardParentTag: HTMLElement;

  /**
   *
   */
  public inputMonthTag: HTMLInputElement;

  /**
   *
   * */
  public inputMonthParentTag: HTMLElement;

  /**
   *
   * */
  public inputYearTag: HTMLInputElement;

  /**
   *
   * */
  public inputYearParentTag: HTMLElement;

  /**
   *
   * */
  public inputCodeParentTag: HTMLElement;

  /**
   *
   * */
  public inputCodeTag: HTMLInputElement;

  /**
   *
   * */
  public inputNameParentTag: HTMLElement;

  /**
   *
   * */
  public inputNameTag: HTMLInputElement;

  render() {
    return (
      <div class="payment-tool-selector">
        <div class="payment-tool-description">
          <i class="fas fa-info-circle"></i>
          {this.online.desc}
        </div>
        <div class="ordering-form payment-tool-form">
          <div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <div ref={(el) => (this.inputCardParentTag = el)}>
                  <input
                    type="text"
                    class="ordering-input"
                    placeholder="Номер карты"
                    ref={(el) => (this.inputCardTag = el)}
                    onBlur={() =>
                      this.checkInputHandler(
                        this.inputCardParentTag,
                        this.inputCardTag
                      )
                    }
                    onInput={() =>
                      this.checkInputFocusHandler(
                        this.inputCardParentTag,
                        this.inputCardTag
                      )
                    }
                  />
                  <div class="input-desc-error">
                    Укажите номер кредитной карты
                  </div>
                </div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <div ref={(el) => (this.inputMonthParentTag = el)}>
                  <input
                    type="text"
                    placeholder="ММ"
                    class="ordering-input"
                    ref={(el) => (this.inputMonthTag = el)}
                    onBlur={() =>
                      this.checkInputHandler(
                        this.inputMonthParentTag,
                        this.inputMonthTag
                      )
                    }
                    onInput={() =>
                      this.checkInputFocusHandler(
                        this.inputMonthParentTag,
                        this.inputMonthTag
                      )
                    }
                  />
                  <div class="input-desc-error">Укажите месяц</div>
                </div>
              </div>
              <div class="ordering-form-input">
                <div ref={(el) => (this.inputYearParentTag = el)}>
                  <input
                    type="text"
                    placeholder="ГГГГ"
                    class="ordering-input"
                    ref={(el) => (this.inputYearTag = el)}
                    onBlur={() =>
                      this.checkInputHandler(
                        this.inputYearParentTag,
                        this.inputYearTag
                      )
                    }
                    onInput={() =>
                      this.checkInputFocusHandler(
                        this.inputYearParentTag,
                        this.inputYearTag
                      )
                    }
                  />
                  <div class="input-desc-error">Укажите год</div>
                </div>
              </div>
              <div class="ordering-form-input">
                <div ref={(el) => (this.inputCodeParentTag = el)}>
                  <input
                    type="text"
                    placeholder="CVV"
                    class="ordering-input"
                    ref={(el) => (this.inputCodeTag = el)}
                    onBlur={() =>
                      this.checkInputHandler(
                        this.inputCodeParentTag,
                        this.inputCodeTag
                      )
                    }
                    onInput={() =>
                      this.checkInputFocusHandler(
                        this.inputCodeParentTag,
                        this.inputCodeTag
                      )
                    }
                  />
                  <div class="input-desc-error">
                    Укажите код CVV кредитной карты
                  </div>
                </div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <div ref={(el) => (this.inputNameParentTag = el)}>
                  <input
                    type="text"
                    maxlength="40"
                    placeholder="Имя латиницей (IVAN IVANOV)"
                    class="ordering-input"
                    ref={(el) => (this.inputNameTag = el)}
                    onBlur={() =>
                      this.checkInputHandler(
                        this.inputNameParentTag,
                        this.inputNameTag
                      )
                    }
                    onInput={() =>
                      this.checkInputFocusHandler(
                        this.inputNameParentTag,
                        this.inputNameTag
                      )
                    }
                  />
                  <div class="input-desc-error">
                    Укажите имя владельца кредитной карты
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="credit-card-security">
          <div class="credit-card-security-title">
            <i class="fas fa-lock"></i>
            {this.online.securityTitle}
          </div>
          {this.online.securityDesc}
        </div>
        <div class="business-customer-documents">
          <div class="business-customer-documents-checkbox">
            <div class="checkbox">
              <input type="checkbox" />
              <span>Необходимы закрывающие документы</span>
            </div>
          </div>
          <div class="business-customer-documents-error">
            Введите реквизиты компании
          </div>
          <div class="ordering-selector">
            <div class="ordering-selector-new">
              <div class="ordering-btn">+ Добавить реквизиты</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * проверяем на заполненность
   * */
  public checkInputHandler(parent, input) {
    !input.value
      ? parent.classList.add("error")
      : parent.classList.remove("error");
  }

  /**
   * проверяем конкретно имя
   * */
  public checkInputFocusHandler(parent, input) {
    if (input.value.length > 2) {
      parent.classList.remove("error");
    }
  }
}
