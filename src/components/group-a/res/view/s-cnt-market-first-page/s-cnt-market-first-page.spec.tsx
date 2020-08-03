import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketFirstPage } from './s-cnt-market-first-page';

describe('s-cnt-market-first-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketFirstPage],
      html: `<s-cnt-market-first-page></s-cnt-market-first-page>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-first-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-first-page>
    `);
  });
});
