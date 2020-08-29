import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingPayment } from './s-cnt-market-ordering-payment';

describe('s-cnt-market-ordering-payment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingPayment],
      html: `<s-cnt-market-ordering-payment></s-cnt-market-ordering-payment>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-payment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-payment>
    `);
  });
});
