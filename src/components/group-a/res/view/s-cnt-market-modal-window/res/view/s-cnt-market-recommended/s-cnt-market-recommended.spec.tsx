import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketRecommended } from './s-cnt-market-recommended';

describe('s-cnt-market-recommended', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketRecommended],
      html: `<s-cnt-market-recommended></s-cnt-market-recommended>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-recommended>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-recommended>
    `);
  });
});
