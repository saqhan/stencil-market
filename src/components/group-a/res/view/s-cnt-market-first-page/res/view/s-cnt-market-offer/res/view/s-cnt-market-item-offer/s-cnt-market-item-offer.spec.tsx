import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketItemOffer } from './s-cnt-market-item-offer';

describe('s-cnt-market-item-offer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketItemOffer],
      html: `<s-cnt-market-item-offer></s-cnt-market-item-offer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-item-offer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-item-offer>
    `);
  });
});
