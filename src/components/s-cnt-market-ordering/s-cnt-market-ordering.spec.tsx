import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrdering } from './s-cnt-market-ordering';

describe('s-cnt-market-ordering', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrdering],
      html: `<s-cnt-market-ordering></s-cnt-market-ordering>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering>
    `);
  });
});
