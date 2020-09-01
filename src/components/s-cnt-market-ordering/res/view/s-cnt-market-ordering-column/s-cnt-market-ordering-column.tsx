import { Component, ComponentInterface, State, h, Prop } from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-column",
  styleUrl: "s-cnt-market-ordering-column.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingColumn implements ComponentInterface {
  /**
   * Данные для панелей
   */
  @Prop() ordering: any;

  /**
   * Стейт для переключения класса active
   */
  @State() addOrRemoveClassState: boolean;

  render() {
    return (
      <div class="ordering-column">
        <div class="ordering-panels">
          <s-cnt-market-ordering-method
            method={this.ordering.method}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState}
          ></s-cnt-market-ordering-method>
          <s-cnt-market-ordering-contacts
            contacts={this.ordering.contacts}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState}
          ></s-cnt-market-ordering-contacts>
          <s-cnt-market-ordering-replacements
            replacements={this.ordering.replacements}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState}
          ></s-cnt-market-ordering-replacements>
          <s-cnt-market-ordering-payment
            payment={this.ordering.payment}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState}
          ></s-cnt-market-ordering-payment>
          <s-cnt-market-ordering-time-of-receipt
            timetable={this.ordering.timetable}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState}
          ></s-cnt-market-ordering-time-of-receipt>
        </div>
        <s-cnt-market-ordering-final final={this.ordering.final}></s-cnt-market-ordering-final>
      </div>
    );
  }

  /**
   * Добавляет класс active
   */
  public addClassActive(id) {
    if (id.step === 1) {
      this.addOrRemoveClassState = true;
      console.log(id);
    } else if (id.step === 2) {
      this.addOrRemoveClassState = true;
      console.log(id);
    } else if (id.step === 3) {
      this.addOrRemoveClassState = true;
      console.log(id);
    } else if (id.step === 4) {
      this.addOrRemoveClassState = true;
      console.log(id);
    }
    else {
      this.addOrRemoveClassState = false;
    }
  }

  /**
   * Удаляет класс active
   */
  public removeClassActive(step) {
    if (step === step) {
      this.addOrRemoveClassState = false;
    }
  }
}
