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
  public inputBikTag: HTMLInputElement

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
              <div class="ordering-form-input" >
                <input
                  placeholder="ИНН"
                  maxlength="12"
                  type="text"
                  class="ordering-input"

                />
                <div class="input-error-desc">Укажите ИНН</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input" ref={(el) => (this.inputLegalPersonParentTag = el)}>
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
              <div class="ordering-form-input  ordering-form-input-disabled">
                <input
                  disabled
                  placeholder="Юридический адрес"
                  maxlength="12"
                  type="text"
                  class="ordering-input"
                />
                <div class="input-error-desc">Укажите юридический адрес</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <input
                  disabled
                  placeholder="КПП"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-form-input-disabled"
                />
                <div class="input-error-desc">Укажите КПП</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <input
                  placeholder="Расчетный счёт"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-input-error"
                />
                <div class="input-error-desc">Укажите расчетный счет</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <input
                  placeholder="БИК"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-input-error"
                />
                <div class="input-error-desc">Укажите БИК</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <input
                  placeholder="Название банка"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-input-error"
                />
                <div class="input-error-desc">Укажите название банка</div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <input
                  placeholder="Корреспондентский счёт"
                  maxlength="12"
                  type="text"
                  class="ordering-input ordering-input-error"
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
