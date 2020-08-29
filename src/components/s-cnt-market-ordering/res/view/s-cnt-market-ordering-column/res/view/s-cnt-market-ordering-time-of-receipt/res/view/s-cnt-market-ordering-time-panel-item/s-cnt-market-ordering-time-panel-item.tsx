import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-ordering-time-panel-item',
  styleUrl: 's-cnt-market-ordering-time-panel-item.css',
  shadow: false,
  scoped: true
})
export class SCntMarketOrderingTimePanelItem implements ComponentInterface {
  /**
   * Время заказа
   */
  @Prop() time: any;

  render() {
    return (
        <div></div>
    );
  }

}
