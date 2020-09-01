import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingFinal } from './s-cnt-market-ordering-final';

describe('s-cnt-market-ordering-final', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingFinal],
      html: `<s-cnt-market-ordering-final></s-cnt-market-ordering-final>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-final>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-final>
    `);
  });
});
