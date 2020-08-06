import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketItemStatistics } from './s-cnt-market-item-statistics';

describe('s-cnt-market-item-statistics', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketItemStatistics],
      html: `<s-cnt-market-item-statistics></s-cnt-market-item-statistics>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-item-statistics>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-item-statistics>
    `);
  });
});
