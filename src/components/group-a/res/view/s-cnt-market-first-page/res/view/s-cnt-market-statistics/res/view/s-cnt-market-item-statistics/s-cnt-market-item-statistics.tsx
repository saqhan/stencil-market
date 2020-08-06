import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import { markdown } from "markdown";
import {MarketStatisticsInterface} from "../../interface/common.interface";

@Component({
  tag: 's-cnt-market-item-statistics',
  styleUrl: 's-cnt-market-item-statistics.css',
  shadow: false,
  scoped: true,
})
export class SCntMarketItemStatistics implements ComponentInterface {
  /**
   * Данные для компонента Statistics
   */
  @Prop() forStatistics: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() MarketStatisticsInterface: MarketStatisticsInterface[] = [];

  render() {
    return (
      <div class="common">
        <div class="text" innerHTML={markdown.toHTML(this.forStatistics.text)}>
        </div>
      </div>
    );
  }

}
