import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {MarketProductDataInterface, MarketProductModalInterface} from "../../../index";

@Component({
  tag: "s-cnt-market-modal-window",
  styleUrl: "s-cnt-market-modal-window.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketModalWindow implements ComponentInterface {
  /**
   * Данные для модального окна
   */
  @Prop() productModal: MarketProductModalInterface;

  /**
   *
   */
  @Prop() productData: MarketProductDataInterface;

  /**
   * Клик по кнопке закрытия модального окна
   */
  @Event() clickOnModal: EventEmitter<void>;

  /**
   *
   * @private
   */
  public modalTag: HTMLElement;

  render() {
    return (
      <div class="window" ref={(el) => this.modalTag = el} onClick={(event) => this.closeModal(event)}>
        <div class="container">
          <s-cnt-market-product
            productBlock={this.productModal.productBlock}
            getProduct={this.productData.productData.getProduct}
          >
          </s-cnt-market-product>
          <s-cnt-market-recommended
            recommendedBlock={this.productModal.recommendedBlock}
            getRecommended={this.productData.productData.getRecommended}
          >
          </s-cnt-market-recommended>
          <s-cnt-market-specification
            specificationBlock={this.productModal.specificationBlock}
            getSpecification={this.productData.productData.getSpecification}
          >
          </s-cnt-market-specification>
        </div>
      </div>
    );
  }

  /**
   * Закрытие модального окна
   */
  public closeModal (event) {
    if (event.target === this.modalTag) {
      this.clickOnModal.emit()
    }
  }
}
