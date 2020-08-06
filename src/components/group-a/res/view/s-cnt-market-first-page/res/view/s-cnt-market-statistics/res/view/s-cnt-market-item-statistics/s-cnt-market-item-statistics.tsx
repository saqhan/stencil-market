import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import { markdown } from "markdown";

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

  render() {
    return (
      <div class="common">
        <div class="text" innerHTML={markdown.toHTML(this.forStatistics.text)}>
        </div>
      </div>
    );
  }

}
