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
                <input
                  type="text"
                  placeholder="Номер карты"
                  class="ordering-input ordering-input-error"
                />
                <div class="input-desc-error">
                  Укажите номер кредитной карты
                </div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <input type="text" placeholder="ММ" class="ordering-input" />
                <div class="input-desc-error">Укажите месяц</div>
              </div>
              <div class="ordering-form-input">
                <input type="text" placeholder="ГГГГ" class="ordering-input" />
                <div class="input-desc-error">Укажите год</div>
              </div>
              <div class="ordering-form-input">
                <input type="text" placeholder="CVV" class="ordering-input" />
                <div class="input-desc-error">
                  Укажите код CVV кредитной карты
                </div>
              </div>
            </div>
            <div class="ordering-form-i">
              <div class="ordering-form-input">
                <input
                  type="text"
                  maxlength="40"
                  placeholder="Имя латиницей (IVAN IVANOV)"
                  class="ordering-input"
                />
                <div class="input-desc-error">
                  Укажите имя владельца кредитной карты
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
          <div class="business-customer-documents-error">Введите реквизиты компании</div>
          <div class="ordering-selector">
            <div class="ordering-selector-new">
              <div class="ordering-btn">+ Добавить реквизиты</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
