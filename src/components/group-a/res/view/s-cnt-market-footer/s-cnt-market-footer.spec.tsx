import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketFooter } from './s-cnt-market-footer';

describe('s-cnt-market-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketFooter],
      html: `<s-cnt-market-footer></s-cnt-market-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-footer>
    `);
  });
});
