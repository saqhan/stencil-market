import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketHeaderNav } from './s-cnt-market-header-nav';

describe('s-cnt-market-header-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketHeaderNav],
      html: `<s-cnt-market-header-nav></s-cnt-market-header-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-header-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-header-nav>
    `);
  });
});
