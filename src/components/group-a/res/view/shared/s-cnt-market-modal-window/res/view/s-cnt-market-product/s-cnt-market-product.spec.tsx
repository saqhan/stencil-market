import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketProduct } from './s-cnt-market-product';

describe('s-cnt-market-product', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketProduct],
      html: `<s-cnt-market-product></s-cnt-market-product>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-product>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-product>
    `);
  });
});
