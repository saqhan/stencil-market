import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketCourier } from './s-cnt-market-courier';

describe('s-cnt-market-courier', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketCourier],
      html: `<s-cnt-market-courier></s-cnt-market-courier>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-courier>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-courier>
    `);
  });
});
