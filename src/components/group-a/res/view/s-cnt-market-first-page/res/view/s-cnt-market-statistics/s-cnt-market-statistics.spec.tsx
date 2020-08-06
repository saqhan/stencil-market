import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketStatistics } from './s-cnt-market-statistics';

describe('s-cnt-market-statistics', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketStatistics],
      html: `<s-cnt-market-statistics></s-cnt-market-statistics>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-statistics>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-statistics>
    `);
  });
});
