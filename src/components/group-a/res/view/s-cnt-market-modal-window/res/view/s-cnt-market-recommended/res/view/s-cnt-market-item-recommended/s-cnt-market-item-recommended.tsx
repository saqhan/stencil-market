import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import { MarketRecommendedInterface } from './res/interface/common.interface';

@Component({
  tag: 's-cnt-market-item-recommended',
  styleUrl: 's-cnt-market-item-recommended.css',
  shadow: false,
  scoped: true
})
export class SCntMarketItemRecommended implements ComponentInterface {
  /**
   * Данные для Item-Recommended
   */
  @Prop() getRecommended: any;

  @Prop() MarketRecommendedInterface: MarketRecommendedInterface[] = [];

  render() {
    return (
      <div>
        <div class="recomm">
          <div class="check-hidden">
            <div class="check">
              <div class="plus">
                <i class="fas fa-plus"/>
              </div>
              <div class="checkout">
                <i class="fas fa-shopping-cart"/>
              </div>
            </div>
          </div>
          <div class="block-image">
            <div class="image"
                 style={{ backgroundImage: "url(" + this.getRecommended.image + ")" }}>
            </div>
          </div>
          <div class="info">
            <div class="price">
              {this.getRecommended.price}
            </div>
            <div class="productName">
              {this.getRecommended.productName}
            </div>
            <div class="weight">
              {this.getRecommended.weight}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
