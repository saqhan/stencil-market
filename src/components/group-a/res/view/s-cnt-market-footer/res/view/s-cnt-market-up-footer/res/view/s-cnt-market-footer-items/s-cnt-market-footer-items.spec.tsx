import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketFooterItems } from './s-cnt-market-footer-items';

describe('s-cnt-market-footer-items', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketFooterItems],
      html: `<s-cnt-market-footer-items></s-cnt-market-footer-items>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-footer-items>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-footer-items>
    `);
  });
});
