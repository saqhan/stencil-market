import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-payment-transfer",
  styleUrl: "s-cnt-market-ordering-payment-transfer.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingPaymentTransfer implements ComponentInterface {
  /**
   * данные для блока оплата переводом
   */
  @Prop() transfer: any;

  /**
   *
   */
  public inputInnTag: HTMLInputElement;

  /**
   *
   * */
  public inputInnParentTag: HTMLElement;

  /**
   *
   */
  public inputLegalPersonTag: HTMLInputElement;

  /**
   *
   * */
  public inputLegalPersonParentTag: HTMLElement;

  /**
   *
   * */
  public inputAddressTag: HTMLInputElement;

  /**
   *
   * */
  public inputAddressParentTag: HTMLElement;

  /**
   *
   * */
  public inputKppParentTag: HTMLElement;

  /**
   *
   * */
  public inputKppTag: HTMLInputElement;

  /**
   *
   * */
  public inputCheckParentTag: HTMLElement;

  /**
   *
   * */
  public inputCheckTag: HTMLInputElement;

  /**
   *
   * */
  public inputBikParentTag: HTMLElement;

  /**
   *
   * */
  public inputBikTag: HTMLInputElement;

  /**
   *
   * */
  public inputBankParentTag: HTMLElement;

  /**
   *
   * */
  public inputBankTag: HTMLInputElement;

  /**
   *
   */
  public inputCorrParentTag: HTMLElement;

  /**
   *
   * */
  public inputCorrTag: HTMLInputElement;

  render() {
    return (
      <div class="payment-tool-selector">
        <div class="payment-tool-description">
          <i class="fas fa-info-circle"></i>
          {this.transfer.desc}
        </div>
        <div class="ordering-form payment-tool-form">
          <div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputInnParentTag = el)}
              >
                <input
                  placeholder="ИНН"
                  maxlength="12"
                  type="text"
                  class="ordering-input"
                  ref={(el) => (this.inputInnTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputInnParentTag,
                      this.inputInnTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputInnParentTag,
                      this.inputInnTag
                    )
                  }
                />
                <div class="input-error-desc">Укажите ИНН</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputLegalPersonParentTag = el)}
              >
                <input
                  disabled
                  placeholder="Юридическое лицо"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-form-input-disabled"
                  ref={(el) => (this.inputLegalPersonTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputLegalPersonParentTag,
                      this.inputLegalPersonTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputLegalPersonParentTag,
                      this.inputLegalPersonTag
                    )
                  }
                />
                <div class="input-error-desc">Укажите юридическое лицо</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputAddressParentTag = el)}
              >
                <input
                  disabled
                  placeholder="Юридический адрес"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-form-input-disabled"
                  ref={(el) => (this.inputAddressTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputAddressParentTag,
                      this.inputAddressTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputAddressParentTag,
                      this.inputAddressTag
                    )
                  }
                />
                <div class="input-error-desc">Укажите юридический адрес</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputKppParentTag = el)}
              >
                <input
                  disabled
                  placeholder="КПП"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-form-input-disabled"
                  ref={(el) => (this.inputKppTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputKppParentTag,
                      this.inputKppTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputKppParentTag,
                      this.inputKppTag
                    )
                  }
                />
                <div class="input-error-desc">Укажите КПП</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputCheckParentTag = el)}
              >
                <input
                  placeholder="Расчетный счёт"
                  maxlength="12"
                  type="text"
                  class="ordering-input"
                  ref={(el) => (this.inputCheckTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputCheckParentTag,
                      this.inputCheckTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputCheckParentTag,
                      this.inputCheckTag
                    )
                  }
                />
                <div class="input-error-desc">Укажите расчетный счет</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputBikParentTag = el)}
              >
                <input
                  placeholder="БИК"
                  maxlength="12"
                  type="text"
                  class="ordering-input"
                  ref={(el) => (this.inputBikTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputBikParentTag,
                      this.inputBikTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputBikParentTag,
                      this.inputBikTag
                    )
                  }
                />
                <div class="input-error-desc">Укажите БИК</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputBankParentTag = el)}
              >
                <input
                  placeholder="Название банка"
                  maxlength="12"
                  type="text"
                  class="ordering-input"
                  ref={(el) => (this.inputBankTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputBankParentTag,
                      this.inputBankTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputBankParentTag,
                      this.inputBankTag
                    )
                  }
                />
                <div class="input-error-desc">Укажите название банка</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div
                class="ordering-form-input"
                ref={(el) => (this.inputCorrParentTag = el)}
              >
                <input
                  placeholder="Корреспондентский счёт"
                  maxlength="12"
                  type="text"
                  class="ordering-input"
                  ref={(el) => (this.inputCorrTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputCorrParentTag,
                      this.inputCorrTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputCorrParentTag,
                      this.inputCorrTag
                    )
                  }
                />
                <div class="input-error-desc">
                  Укажите корреспондентский счет
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="business-customer-documents business-customer-documents-disabled">
          <div class="business-customer-documents-checkbox">
            <div class="checkbox">
              <input type="checkbox" />
              <span>Необходимы закрывающие документы</span>
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
