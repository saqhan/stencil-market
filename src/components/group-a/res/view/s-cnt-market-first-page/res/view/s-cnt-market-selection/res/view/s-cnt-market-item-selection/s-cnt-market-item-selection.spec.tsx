import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketItemSelection } from './s-cnt-market-item-selection';

describe('s-cnt-market-item-selection', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketItemSelection],
      html: `<s-cnt-market-item-selection></s-cnt-market-item-selection>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-item-selection>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-item-selection>
    `);
  });
});
