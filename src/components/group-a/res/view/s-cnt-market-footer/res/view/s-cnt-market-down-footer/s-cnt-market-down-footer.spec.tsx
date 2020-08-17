import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketDownFooter } from './s-cnt-market-down-footer';

describe('s-cnt-market-down-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketDownFooter],
      html: `<s-cnt-market-down-footer></s-cnt-market-down-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-down-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-down-footer>
    `);
  });
});
