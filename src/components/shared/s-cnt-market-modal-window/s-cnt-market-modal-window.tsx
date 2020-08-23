import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {MarketProductModalInterface} from "../../../index";

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
            getProduct={this.productModal.getProduct}>
          </s-cnt-market-product>
          <s-cnt-market-recommended
            getRecommended={this.productModal.getRecommended}
          >
          </s-cnt-market-recommended>
          <s-cnt-market-specification
            getSpecification={this.productModal.getSpecification}>
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
