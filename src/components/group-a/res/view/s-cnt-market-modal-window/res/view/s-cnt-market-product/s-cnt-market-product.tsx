import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import { SProduct } from './interface/common.interface';

@Component({
  tag: 's-cnt-market-product',
  styleUrl: 's-cnt-market-product.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProduct implements ComponentInterface {
  /**
   * Данные для Product
   */
  @Prop() payload: any;

  /**
   * Интерфейс для SProduct
   */
  @Prop() SProduct: SProduct[] = [];

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-7">
              <div class="info">
                <div class="brand">

                </div>
                <div class="products">

                </div>
                <div class="category">

                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="image">

              </div>
            </div>
            <div class="col-6">
              <div class="info-product">
                <div class="close">
                  <i class="fa fa-times" aria-hidden="true"/>
                </div>
                <div class="name">

                </div>
                <div class="weight">

                </div>
                <div class="price">

                </div>
                <div class="info-presence">
                  <div class="circle">
                    <i class="fa fa-circle" aria-hidden="true"/>
                    <i class="fa fa-circle" aria-hidden="true"/>
                    <i class="fa fa-circle" aria-hidden="true"/>
                    <i class="fa fa-circle" aria-hidden="true"/>
                  </div>
                  <div class="presence">

                  </div>
                </div>
                <div class="button">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
