import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketItemRecommended } from './s-cnt-market-item-recommended';

describe('s-cnt-market-item-recommended', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketItemRecommended],
      html: `<s-cnt-market-item-recommended></s-cnt-market-item-recommended>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-item-recommended>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-item-recommended>
    `);
  });
});
