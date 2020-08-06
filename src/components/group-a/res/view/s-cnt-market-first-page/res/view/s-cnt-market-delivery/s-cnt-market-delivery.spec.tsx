import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketDelivery } from './s-cnt-market-delivery';

describe('s-cnt-market-delivery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketDelivery],
      html: `<s-cnt-market-delivery></s-cnt-market-delivery>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-delivery>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-delivery>
    `);
  });
});
