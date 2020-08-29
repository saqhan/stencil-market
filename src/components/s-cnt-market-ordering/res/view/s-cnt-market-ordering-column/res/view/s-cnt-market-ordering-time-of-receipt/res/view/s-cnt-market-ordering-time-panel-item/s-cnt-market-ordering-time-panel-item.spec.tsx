import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingTimePanelItem } from './s-cnt-market-ordering-time-panel-item';

describe('s-cnt-market-ordering-time-panel-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingTimePanelItem],
      html: `<s-cnt-market-ordering-time-panel-item></s-cnt-market-ordering-time-panel-item>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-time-panel-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-time-panel-item>
    `);
  });
});
