import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event, State,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-footer-modal-form",
  styleUrl: "s-cnt-market-footer-modal-form.css",
  shadow: false,
  scoped: true
})
export class SCntMarketFooterModalForm implements ComponentInterface {
  /**
   * show modal form
   * */
  @Prop() showModalForm: boolean;

  /**
   *
   * */
  @Event() clickOnCloseModalForm: EventEmitter;

  /**
   *
   * */
  @State() backgroundModalFormTagState: HTMLElement;

  render() {
    return (
      <div>
        <div
          class={this.showModalForm ? "drawer-backdrop opened " : "drawer-backdrop"}
          onClick={(event) => this.closeModalFormHandler(event)}
          ref={(el) => (this.backgroundModalFormTagState = el)}
        ></div>
      </div>
    );
  }

  /**
   * close modal form
   * */
  public closeModalFormHandler(event) {
    if (this.backgroundModalFormTagState === event.target) {
      this.clickOnCloseModalForm.emit();
    }
  }
}
