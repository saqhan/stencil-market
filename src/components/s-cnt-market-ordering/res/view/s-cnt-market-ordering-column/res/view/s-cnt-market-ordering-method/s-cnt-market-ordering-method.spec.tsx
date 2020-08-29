import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingMethod } from './s-cnt-market-ordering-method';

describe('s-cnt-market-ordering-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingMethod],
      html: `<s-cnt-market-ordering-panel></s-cnt-market-ordering-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-panel>
    `);
  });
});
