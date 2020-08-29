import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingPaymentTranser } from './s-cnt-market-ordering-payment-transfer';

describe('s-cnt-market-ordering-payment-transer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingPaymentTranser],
      html: `<s-cnt-market-ordering-payment-transer></s-cnt-market-ordering-payment-transer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-payment-transer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-payment-transer>
    `);
  });
});
