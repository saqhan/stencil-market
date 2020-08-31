import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-replacements",
  styleUrl: "s-cnt-market-ordering-replacements.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingReplacements implements ComponentInterface {
  /**
   * Данные для панели метод получения
   */
  @Prop() replacements: any;

  /**
   * Стейт для переключения класса active
   */
  @Prop() addOrRemoveClassState: boolean;

  /**
   *Добавление класса active
   */
  @Event() addClassActive: EventEmitter;

  /**
   *Удаление класса active
   */
  @Event() removeClassActive: EventEmitter;

  render() {
    return (
      <div class={this.addOrRemoveClassState ? "active" : ""}>
        <div class="ordering-panel">
          <div
            class="panel-header collapsed"
            onClick={() => this.addClassActiveHandler({ step: 3 })}
          >
            <div class="panel-header-desc">
              <div class="panel-header-indicator">{this.replacements.id}</div>
              {this.addOrRemoveClassState ? (
                <div class="panel-header-text">{this.replacements.text}</div>
              ) : (
                <div class="panel-header-text">{this.replacements.title}</div>
              )}
            </div>
            <div class="panel-header-details">
              <div class="panel-header-detail">{this.replacements.info}</div>
              <div class="panel-header-detail">{this.replacements.address}</div>
            </div>
            <div class="panel-header-link">
              <a>{this.replacements.link}</a>
            </div>
          </div>
          <div class="ordering-panel-hide">
            <div class="panel-content">
              <div class="replacement-policies">
                <div class="replacement-policies-notice">
                  <div>{this.replacements.content.desc}</div>
                </div>
                <div class="replacement-policies-content">
                  <ReplacementPolicyFunctionalComponent
                    array={this.replacements.panels}
                  ></ReplacementPolicyFunctionalComponent>
                </div>
              </div>
              <div class="button-block">
                <button
                  onClick={() => this.removeClassActiveHandler({ step: 3 })}
                  type="button"
                >
                  {this.replacements.btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Добавляет класс active
   */
  public addClassActiveHandler(step) {
    this.addClassActive.emit(step);
  }

  /**
   * Добавляет класс active
   */
  public removeClassActiveHandler(step) {
    this.removeClassActive.emit(step);
  }
}

const ReplacementPolicyFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <s-cnt-market-ordering-replacement-policy
        panels={item}
      ></s-cnt-market-ordering-replacement-policy>
    );
  });
};
