import {Component, ComponentInterface, h, Prop, State} from "@stencil/core";
import {footerContactColumnInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-up-footer-form",
  styleUrl: "s-cnt-market-up-footer-form.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketUpFooterForm implements ComponentInterface {

  /**
   * Контактные данные для 4 колонки в футере
   * */
  @Prop() footerContactColumn: footerContactColumnInterface;

  /**
   *
   * */
  @State() isShowFormState: boolean = false;

  render() {
    return (
      <div class="upFooterForm">
        <div class="number">{this.footerContactColumn.number}</div>
        <div class="time">{this.footerContactColumn.time}</div>
        <div class="input-block" onClick={() => this.clickOnShowFormFooterHandler()}>
          <i class="far fa-comment-alt icon" />
          <div class="input">{this.footerContactColumn.input}</div>
        </div>
        <s-cnt-market-footer-modal-form
          showModalForm={this.isShowFormState}
          onClickOnCloseModalForm={()=> this.clickOnCloseModalForm()}
        ></s-cnt-market-footer-modal-form>
        <div class="text">{this.footerContactColumn.text}</div>
      </div>
    );
  }

  /**
   * клик по форме обратной связи
   * */
  public clickOnShowFormFooterHandler(): void {
    this.isShowFormState = true;
    // console.log('при первом клике в подвале', this.isShowFormState)
  }

  /**
   *
   * */
  public clickOnCloseModalForm(): void {
    this.isShowFormState = false
    // console.log('состоняие у родителя', this.isShowFormState)
  }

}
