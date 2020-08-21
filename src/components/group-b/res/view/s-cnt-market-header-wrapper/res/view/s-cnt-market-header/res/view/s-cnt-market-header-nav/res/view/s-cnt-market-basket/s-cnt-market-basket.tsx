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
  @Event() closeBasket: EventEmitter;

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
                <div class="new-cart-empty">
                  <div class="new-cart-empty-img">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                  <div class="new-cart-empty-text">Ваша корзина пуста</div>
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
