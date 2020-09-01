import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingSidebar } from './s-cnt-market-ordering-sidebar';

describe('s-cnt-market-ordering-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingSidebar],
      html: `<s-cnt-market-ordering-sidebar></s-cnt-market-ordering-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-sidebar>
    `);
  });
});
