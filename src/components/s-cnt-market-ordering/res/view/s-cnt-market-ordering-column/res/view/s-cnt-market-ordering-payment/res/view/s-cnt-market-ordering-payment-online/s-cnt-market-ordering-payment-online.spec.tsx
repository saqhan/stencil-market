import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingPaymentOnline } from './s-cnt-market-ordering-payment-online';

describe('s-cnt-market-ordering-payment-online', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingPaymentOnline],
      html: `<s-cnt-market-ordering-payment-online></s-cnt-market-ordering-payment-online>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-payment-online>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-payment-online>
    `);
  });
});
