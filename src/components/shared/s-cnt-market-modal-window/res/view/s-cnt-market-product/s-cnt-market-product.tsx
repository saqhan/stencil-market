import {Component, ComponentInterface, EventEmitter, h, Prop, Event, State} from "@stencil/core";
import {MarketGetProductInterface, MarketProductBlockInterface} from "../../../../../../index";

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
  @Prop() productBlock: MarketProductBlockInterface;

  /**
   * Данные для Product
   */
  @Prop() getProduct: MarketGetProductInterface;

  /**
   * Клик по кнопке закрытия модального окна
   */
  @Event() clickOnModal: EventEmitter<void>;

  /**
   *
   */
  @State() selectedImg: number;

  /**
   *
   */
  likeCheck: HTMLElement;

  componentDidLoad() {
    this.selectedImg = this.getProduct.defaultImgId;
  }

  render() {
    return (
      <div class="product">
        <div class="close" onClick={() => this.closeModalHandler()}>
          <i class="fa fa-times" aria-hidden="true"/>
        </div>
        <div class="container">
          <div class="row modal-nav">
            <div class="col">
              <div class="info">
                <span class="brand">
                  {this.getProduct.brand}
                </span>
                <span class="products">
                  {this.getProduct.products}
                </span>
                <span class="category">
                  {this.getProduct.category}
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="image">
                <ProductImg arr={this.getProduct.image} selectedImg={this.selectedImg}>

                </ProductImg>
              </div>
              <div class="product-img-item-wrapper">
                <ProductImgItems arr={this.getProduct.image} imgIdSelect={(x) => this.imgIdSelect(x)}>

                </ProductImgItems>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="info-product">
                <div class="name">
                  {this.getProduct.name}
                </div>
                <div class="weight">
                  {this.getProduct.weight}
                </div>
                <div class="price">
                  {this.getProduct.price}
                  <span>
                    {this.getProduct.currency}
                  </span>
                </div>
                <div class="info-presence">
                  <div class="circle">
                    <i class="fa fa-circle cir" aria-hidden="true"/>
                    <i class="fa fa-circle cir" aria-hidden="true"/>
                    <i class="fa fa-circle cir" aria-hidden="true"/>
                    <i class="fa fa-circle cir" aria-hidden="true"/>
                  </div>
                  <div class="presence">
                    {/*{this.getProduct.presence}*/}
                  </div>
                </div>
                <div class="my-item">
                  <div class="button">
                    <button class="my-button">{this.productBlock.button}</button>
                  </div>
                  <div class="heart" ref={(el) => this.likeCheck = el} onClick={() => this.iconLike(this.likeCheck)}>
                    <i class={this.productBlock.likeIcon} aria-hidden="true"/>
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

  /**
   * Закрытие модального окна
   */
  public imgIdSelect(number) {
    this.selectedImg = number;
  }

  /**
   * Закрытие модального окна
   */
  public iconLike(detail) {
    if (detail === this.likeCheck) {
      if (detail.id != 'check') {
        detail.id = 'check'
      } else {
        detail.id = ''
      }
    }
  }
}

/*
* компонентная функция для вывода элементов
 */
const ProductImg = (props) => {
  return props.arr.map((item) => {
    if (props.selectedImg === item.id) {
      return (
        <div style={{backgroundImage: "url(" + item.img + ")"}}>

        </div>
      );
    }
  })
}

/*
* компонентная функция для вывода элементов
 */
const ProductImgItems = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="product-img-item">
        <div style={{backgroundImage: "url(" + item.img + ")"}} onClick={() => props.imgIdSelect(item.id)}>

        </div>
      </div>
    );
  })
}
