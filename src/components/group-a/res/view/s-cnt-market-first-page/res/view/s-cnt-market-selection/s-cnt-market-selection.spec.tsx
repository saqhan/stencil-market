import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketSelection } from './s-cnt-market-selection';

describe('s-cnt-market-selection', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketSelection],
      html: `<s-cnt-market-selection></s-cnt-market-selection>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-selection>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-selection>
    `);
  });
});
