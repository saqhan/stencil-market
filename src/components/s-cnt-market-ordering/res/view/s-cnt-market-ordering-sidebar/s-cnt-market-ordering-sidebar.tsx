import {Component, ComponentInterface, h, State} from '@stencil/core';

@Component({
  tag: 's-cnt-market-ordering-sidebar',
  styleUrl: 's-cnt-market-ordering-sidebar.css',
  shadow: true,
})
export class SCntMarketOrderingSidebar implements ComponentInterface {
  /**
   *
   * */
  @State() promoModal: boolean;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;

  render() {
    return (
      <aside class="checkout-sidebar-wrapper">
        {
          this.promoModal ? (
            <div class="promo-modal-wrapper">
              <div class="promo-modal-closed" onClick={(event) => this.clickPopUp(event)}
                   ref={(el) => this.ourModal = el}>

              </div>
              <div class="promo-modal-form-wrapper">
                <div class="close-btn-wrapper">
                  <button class="close-btn" onClick={() => this.closeForm()}>
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <div class="promo-modal-form-container">
                  <div class="promo-modal-form-title">
                    Введите промокод
                  </div>
                  <form class="promo-modal-form-body">
                    <div class="promo-code-input-wrapper">
                      <input type="text" placeholder="Промокод"/>
                      <div class="checkout-input-error">
                        Промокод не может быть пустым
                      </div>
                    </div>
                    <div class="promo-code-btn-wrapper">
                      <button class="promo-code-btn btn-cancel">
                        Отменить
                      </button>
                      <button class="promo-code-btn btn-add">
                        Добавить код
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            ''
          )
        }
        <div class="checkout-sidebar-container">
          <div class="checkout-summary-wrap">
            <div class="checkout-logo-wrap">
              <div class="checkout-logo-back-color">
                <div class="checkout-logo-back-img"
                     style={{backgroundImage: "url(https://sbermarket.ru/spree/retailer/icons/234559/original/1.png?1580316602)"}}
                >

                </div>
              </div>
              <div class="checkout-market-name">
                METRO
              </div>
            </div>
            <div class="checkout-sidebar-product-info-wrapper">
              <div>
                <div class="checkout-subtotal">
                  <div class="checkout-subtotal-title">
                    Товары
                  </div>
                  <div class="checkout-subtotal-price">
                    7 360,25 <span>₽</span>
                  </div>
                </div>
                <div class="checkout-subtotal-detail">
                  <div class="">
                    9 позиций
                  </div>
                  <div class="checkout-subtotal-weight">
                    <i class="fas fa-weight-hanging"></i>
                    <span>7.7 kg</span>
                  </div>
                </div>
              </div>
              <div class="shipping-and-assembly-info-wrap">
                <div class="shipping-and-assembly-info-container">
                  <div class="shipping-and-assembly-info-title">
                  <span>
                    Сборка и доставка
                  </span>
                    <i class="fas fa-arrow-circle-down"></i>
                  </div>
                  <div class="shipping-and-assembly-info">
                    бесплатно
                  </div>
                </div>
                <div class="shipping-and-assembly-collapse">
                  <div class="shipping-and-assembly-collapse-item">
                    <div class="collapse-item-title">
                      Сборка
                    </div>
                    <div class="collapse-item-value">
                      бесплатно
                    </div>
                  </div>
                  <div class="shipping-and-assembly-collapse-item">
                    <div class="collapse-item-title">
                      Сборка
                    </div>
                    <div class="collapse-item-value">
                      бесплатно
                    </div>
                  </div>
                  <div class="shipping-and-assembly-collapse-item">
                    <div class="collapse-item-title">
                      Сборка
                    </div>
                    <div class="collapse-item-value">
                      бесплатно
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="promo-code-block-wrapper">
              <div class="promo-code-check">
                Применить промокод
              </div>
              <div class="promo-code-items">
                <div class="promo-code-item" onClick={() => this.openForm()}>
                  <div class="promo-code-item-img">
                    <div
                      style={{backgroundImage: "url(https://sbermarket.ru/spree/loyalty_cards_logos/110659/default/mnogo_ru.jpg?1541599946)"}}
                    >

                    </div>
                  </div>
                  <div class="promo-code-item-info">
                    <div class="promo-code-item-name">
                      Много.Ру
                    </div>
                    <div class="promo-code-item-link-add">
                      Добавить карту
                    </div>
                  </div>
                </div>
                <div class="promo-code-item" onClick={() => this.openForm()}>
                  <div class="promo-code-item-img">
                    <div
                      style={{backgroundImage: "url(https://sbermarket.ru/spree/loyalty_cards_logos/110659/default/mnogo_ru.jpg?1541599946)"}}
                    >

                    </div>
                  </div>
                  <div class="promo-code-item-info">
                    <div class="promo-code-item-name">
                      Много.Ру
                    </div>
                    <div class="promo-code-item-link-add">
                      Добавить карту
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="final-amount-of-checkout-wrapper">
              <div class="final-amount-wrapper">
                <div class="final-amount-title">
                  Итого
                </div>
                <div class="final-amount-value">
                  7 360,25 <span>₽</span>
                </div>
              </div>
              <button class="checkout-btn checkout-btn-checked">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.promoModal = true;
  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.promoModal = false;
  }

  /**
   * Вызов функции вывода меню при условии совпадения таргета клика с нужным узлом
   */
  public clickPopUp(event) {
    if (event.target === this.ourModal) {
      this.promoModal = false;
    }
  };

}
