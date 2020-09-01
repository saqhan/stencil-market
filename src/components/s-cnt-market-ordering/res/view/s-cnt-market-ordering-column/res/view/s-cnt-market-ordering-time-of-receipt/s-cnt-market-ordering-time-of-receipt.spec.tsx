import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingTimeOfReceipt } from './s-cnt-market-ordering-time-of-receipt';

describe('s-cnt-market-ordering-time-of-receipt', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingTimeOfReceipt],
      html: `<s-cnt-market-ordering-time-of-receipt></s-cnt-market-ordering-time-of-receipt>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-time-of-receipt>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-time-of-receipt>
    `);
  });
});
