import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-basket',
  styleUrl: 's-cnt-market-basket.css',
  shadow: false,
  scoped: true
})
export class SCntMarketBasket implements ComponentInterface {

  /**
   * Стейт на состояние корзины открыто/закрыто
   * */
  @Prop() openedBasket: boolean;

  /**
   * /Закрыть корзину
   * */
  @Event() closeBasket: EventEmitter <void>;

  /**
   * Тег обертки оверлея корзины
   * */
  private basketTag: HTMLElement;

  render() {
    return (
      <div>
        <div class={
          this.openedBasket
            ? "drawer-backdrop  opened "
            : "drawer-backdrop "
        }
             ref={(el) => (this.basketTag = el)}
             onClick={(event) => this.clickOnBasketHandler(event)}
        ></div>
        <div class={this.openedBasket ? "drawer-right drawer-transition opened " : "drawer-right drawer-transition "}>
          <div class="drawer-content">
            <div class="new-cart">
              <div class="new-cart-header">
                <div class="new-cart-title">Ваша корзина</div>
                <div class="btn-close-cart"
                  onClick={() => this.closeBasketHandler()}
                >
                  <i class="fas fa-times"></i>
                  <div class="btn-close-cart-text">Закрыть</div>
                </div>
              </div>
              <div class="new-cart-content">
                {/*<div class="new-cart-empty">*/}
                {/*  <div class="new-cart-empty-img">*/}
                {/*    <i class="fas fa-shopping-cart"></i>*/}
                {/*  </div>*/}
                {/*  <div class="new-cart-empty-text">Ваша корзина пуста</div>*/}
                {/*</div>*/}
                <div class  ="cart-retailer">
                  <div class="cart-retailer-header">
                    <div class="cart-retailer-details">
                      <div class="cart-box">
                        <div class="cart-box-detail">
                          <div class="cart-retailer-details-well">11</div>
                          <div class="cart-retailer-details-name">METRO</div>
                          <div class="cart-retailer-divider">
                            <div class="cart-retailer-divider-inner">

                            </div>
                          </div>
                          <i class="fas fa-weight-hanging"></i>
                          <div class="cart-retailer-details-weight">
                               7,4 кг
                          </div>

                        </div>
                        <div class="cart-retailer-details-well">
                          <div>
                            5 056,01
                            <span>Р</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="retailer-deliveries">
                      <div class="retailer-deliveries-caption">
                        <div class="retailer-delivery">
                          <div class="cart-retailer-subheader">
                            <div class="cart-box">
                              <div class="retailer-delivery-summary">
                                <span class="retailer-delivery-text">
                                  Ближайший самовывоз:
                                </span>
                                <span>сегодня, 19:00-20:00</span>
                              </div>
                              <div class="cart-box">
                                <div class="cart-info">
                                  <i class="fas fa-info-circle"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div class="message-box">
                <button>Сделать заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * клик на закрыть корзину
   * */
  public clickOnBasketHandler(event):void {
    if (event.target === this.basketTag) {
      this.closeBasket.emit();
    }
  }

  /**
   * Закрытие  Basket
   * */
  public closeBasketHandler():void {
    this.closeBasket.emit();
  }
}
