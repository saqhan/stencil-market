import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketTopBar } from './s-cnt-market-top-bar';

describe('s-cnt-market-top-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketTopBar],
      html: `<s-cnt-market-top-bar></s-cnt-market-top-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-top-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-top-bar>
    `);
  });
});
