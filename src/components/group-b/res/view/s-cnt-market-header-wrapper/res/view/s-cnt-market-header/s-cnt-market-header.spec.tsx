import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketHeader } from './s-cnt-market-header';

describe('s-cnt-market-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketHeader],
      html: `<s-cnt-market-header></s-cnt-market-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-header>
    `);
  });
});
