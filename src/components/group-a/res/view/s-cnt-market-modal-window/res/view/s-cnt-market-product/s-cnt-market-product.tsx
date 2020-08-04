import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketProductInterface } from "./interface/common.interface";

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
  @Prop() getProduct: any;

  /**
   * Интерфейс для Product
   */
  @Prop() MarketProductInterface: MarketProductInterface[] = [];

  render() {
    return (
      <div class="product">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <div class="info">
                <div class="brand">{this.getProduct.brand}</div>
                <div class="products">{this.getProduct.products}</div>
                <div class="category">{this.getProduct.category}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="image">
                <div class="category">
                  <img src={this.getProduct.image} alt="" />
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="info-product">
                <div class="close">
                  <i class="fa fa-times" aria-hidden="true" />
                </div>
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
}
