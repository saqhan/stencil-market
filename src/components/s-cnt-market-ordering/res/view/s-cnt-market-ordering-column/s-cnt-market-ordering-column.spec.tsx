import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingColumn } from './s-cnt-market-ordering-column';

describe('s-cnt-market-ordering-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingColumn],
      html: `<s-cnt-market-ordering-column></s-cnt-market-ordering-column>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-column>
    `);
  });
});
