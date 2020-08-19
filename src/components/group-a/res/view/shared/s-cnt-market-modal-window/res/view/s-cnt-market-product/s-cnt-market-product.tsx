import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from "@stencil/core";
import { MarketProductInterface } from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-product",
  styleUrl: "s-cnt-market-product.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProduct implements ComponentInterface {
  /**
   * Данные для Product
   */
  @Prop() getProduct: MarketProductInterface;

  /**
   * Клик по кнопке закрытия модального окна
   */
  @Event() clickOnModal: EventEmitter<void>;

  render() {
    return (
      <div class="product">
        <div class="close" onClick={() => this.closeModalHandler() }>
          <i class="fa fa-times" aria-hidden="true" />
        </div>
        <div class="container">
          <div class="row modal-nav">
            <div class="col">
              <div class="info">
                <span class="brand">{this.getProduct.brand}</span>
                <span class="products">{this.getProduct.products}</span>
                <span class="category">{this.getProduct.category}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="image">
                <img src={this.getProduct.image} alt="" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="info-product">
                <div class="name">{this.getProduct.name}</div>
                <div class="weight">{this.getProduct.weight}</div>
                <div class="price">{this.getProduct.price}</div>
                <div class="info-presence">
                  <div class="circle">
                    <i class="fa fa-circle cir" aria-hidden="true" />
                    <i class="fa fa-circle cir" aria-hidden="true" />
                    <i class="fa fa-circle cir" aria-hidden="true" />
                    <i class="fa fa-circle cir" aria-hidden="true" />
                  </div>
                  <div class="presence">{this.getProduct.presence}</div>
                </div>
                <div class="my-item">
                  <div class="button">
                    <button class="my-button">{this.getProduct.button}</button>
                  </div>
                  <div class="heart">
                    <i class="fas fa-heart my-heart" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Закрытие модального окна
   */
  public closeModalHandler() {
    this.clickOnModal.emit()
  }
}