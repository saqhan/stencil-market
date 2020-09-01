import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import { MarketCartProductsInterface } from "../../../../../../../../../../../../../../index";
import {productsSliderCards} from "../../../../../../../../../../../../../../utils/mock-a";
import { productsSliderCartTitle} from "../../../../../../../../../../../../../../utils/mock-s";

@Component({
  tag: "s-cnt-market-basket",
  styleUrl: "s-cnt-market-basket.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketBasket implements ComponentInterface {
  /**
   * Продукты из корзины
   * */
  @Prop() marketCartProducts: MarketCartProductsInterface[] = [];

  /**
   * Стейт на состояние корзины открыто/закрыто
   * */
  @Prop() openedBasket: boolean;

  /**
   * /Закрыть корзину
   * */
  @Event() closeBasket: EventEmitter<void>;

  /**
   * Тег обертки оверлея корзины
   * */
  private basketTag: HTMLElement;

  /**
   *
   * */
  @State() MarketCartProductsState = this.marketCartProducts;

  /**
   * стейт для открытие/закрытие информации о самовывозе
   * */

  @State() isShowInfoPickup: boolean;

  render() {
    return (
      <div>
        <div
          class={
            this.openedBasket ? "drawer-backdrop  opened " : "drawer-backdrop "
          }
          ref={(el) => (this.basketTag = el)}
          onClick={(event) => this.clickOnBasketHandler(event)}
        ></div>
        <div
          class={
            this.openedBasket
              ? "drawer-right drawer-transition opened "
              : "drawer-right drawer-transition "
          }
        >
          <div class="drawer-content">
            <div class="new-cart">
              <div class="new-cart-header">
                <div class="new-cart-title">Ваша корзина</div>
                <div
                  class="btn-close-cart"
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
                <div class="cart-retailer">
                  <div class="cart-retailer-header">
                    <div class="cart-retailer-details">
                      <div class="cart-box">
                        <div class="cart-box-detail">
                          <div class="cart-retailer-details-well">
                            {this.MarketCartProductsState.length}
                          </div>
                          <div class="cart-retailer-details-name">METRO</div>
                          <div class="cart-retailer-divider">
                            <div class="cart-retailer-divider-inner"></div>
                          </div>
                          <i class="fas fa-weight-hanging"></i>
                          <div class="cart-retailer-details-weight">
                            {this.getTotalWeightProducts(
                              this.MarketCartProductsState
                            )}
                          </div>
                        </div>
                        <div class="cart-retailer-details-well">
                          <div>
                            {this.getTotalPriceProducts(
                              this.MarketCartProductsState
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class={
                        this.isShowInfoPickup
                          ? "retailer-deliveries opened-retailer"
                          : "retailer-deliveries"
                      }
                    >
                      <div
                        class={
                          this.isShowInfoPickup
                            ? "retailer-deliveries-caption opened-caption"
                            : "retailer-deliveries-caption"
                        }
                        onClick={() => this.clickOnCaptionPickupHandler()}
                      >
                        <div class="retailer-delivery">
                          <div class="cart-retailer-subheader">
                            <div class="cart-box">
                              <div class="retailer-delivery-summary">
                                <span class="retailer-delivery-text">
                                  Ближайший самовывоз:
                                </span>
                                <span>сегодня, 14:00-16:00</span>
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
                      <div
                        class={
                          this.isShowInfoPickup
                            ? "retailer-deliveries-list opened-list"
                            : "retailer-deliveries-list"
                        }
                        onClick={() => this.clickOnCaptionPickupHandler()}
                      >
                        <div class="retailer-delivery">
                          <div class="cart-retailer-subheader">
                            <div class="cart-box">
                              <div class="retailer-delivery-summary">
                                <span>Сегодня, 14:00-16:00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="retailer-delivery">
                          <div class="cart-retailer-subheader">
                            <div class="cart-box">
                              <div class="retailer-delivery-summary">
                                <span>Сегодня, 16:00-18:00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="retailer-delivery">
                          <div class="cart-retailer-subheader">
                            <div class="cart-box">
                              <div class="retailer-delivery-summary">
                                <span>Сегодня, 17:00-19:00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-line-items">
                    <div class="cart-line-items-i">
                      <div class="cart-line-item-wrapper">
                        <div class="swipable">
                          <CardProductCart
                            array={this.MarketCartProductsState}
                          ></CardProductCart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="retail-rocket-block">
                  <s-cnt-market-products-slider
                    theme={'cart'}
                    productsSliderCards={productsSliderCards}
                    productsSliderTitle={productsSliderCartTitle}
                  ></s-cnt-market-products-slider>
                </div>
              </div>
              <div class="message-box">
                {this.MarketCartProductsState.length ? (
                  <button class="btn-buy">
                    Сделать заказ
                    <span class="btn-price">
                      {this.getTotalPriceProducts(this.MarketCartProductsState)}
                    </span>
                  </button>
                ) : (
                  <button class="btn-empty">Сделать заказ</button>
                )}
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
  public clickOnBasketHandler(event): void {
    if (event.target === this.basketTag) {
      this.closeBasketHandler();
    }
  }

  /**
   * Закрытие  Basket
   * */
  public closeBasketHandler(): void {
    this.closeBasket.emit();
  }

  /**
   * суммирование цен товаров в корзине
   * */
  public getTotalPriceProducts(array) {
    const reducer = (accumulator, currentValue) =>
      accumulator +
      (currentValue.sales ? currentValue.sales : currentValue.price);
    const totalValue = " ₽";
    const total = array.reduce(reducer, 0) + totalValue;
    return total;
  }

  /**
   * Получение общего веса продуктов
   * */
  public getTotalWeightProducts(array) {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.weight;
    const weight = array.reduce(reducer, 0);
    if (weight > 999) {
      return weight / 1000 + " кг";
    } else {
      return weight + " г";
    }
  }

  /**
   * Клик на время самовывоза
   * */
  public clickOnCaptionPickupHandler():void {
    this.isShowInfoPickup = !this.isShowInfoPickup;
  }
}

/**
 * Карточка продукта в магазине
 */
const CardProductCart = (props) => {
  return props.array.map((item) => {
    return (
      <div class="cart-line-item">
        <div class="cart-box">
          <div class="line-item-counter">
            <button class="line-item-counter-control">
              <i class="fas fa-sort-up"></i>
            </button>
            <span class="line-item-counter-text">{item.count}</span>
            <button class="line-item-counter-control">
              <i class="fas fa-caret-down"></i>
            </button>
          </div>
          <a class="cart-line-item-link">
            <div
              class="cart-line-item-logo"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div class="cart-line-item-details">
              <div class="cart-line-item-description">{item.name}</div>
              <span class="cart-line-item-volume">
                {item.weight} {item.weightValue}
              </span>
            </div>
          </a>
          <div class="cart-line-item-price">
            {item.sales ? (
              <div>
                <div class="price old-price ">
                  {item.price}
                  <span> ₽</span>
                </div>
                <div class="price price-sale">
                  {item.sales}
                  <span> ₽</span>
                </div>
              </div>
            ) : (
              <div class="price">
                {item.price}
                <span> ₽</span>
              </div>
            )}
            <div class="cart-line-item-remove">удалить</div>
          </div>
        </div>
      </div>
    );
  });
};
