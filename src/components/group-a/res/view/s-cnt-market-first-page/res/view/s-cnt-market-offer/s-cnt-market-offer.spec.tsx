import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOffer } from './s-cnt-market-offer';

describe('s-cnt-market-offer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOffer],
      html: `<s-cnt-market-offer></s-cnt-market-offer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-offer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-offer>
    `);
  });
});
