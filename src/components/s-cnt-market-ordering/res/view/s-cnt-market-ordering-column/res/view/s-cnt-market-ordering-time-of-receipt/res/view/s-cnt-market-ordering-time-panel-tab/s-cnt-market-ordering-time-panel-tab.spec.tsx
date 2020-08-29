import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingTimePanelTab } from './s-cnt-market-ordering-time-panel-tab';

describe('s-cnt-market-ordering-time-panel-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingTimePanelTab],
      html: `<s-cnt-market-ordering-time-panel-tab></s-cnt-market-ordering-time-panel-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-time-panel-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-time-panel-tab>
    `);
  });
});
