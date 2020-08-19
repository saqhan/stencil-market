import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketUpFooter } from './s-cnt-market-up-footer';

describe('s-cnt-market-up-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketUpFooter],
      html: `<s-cnt-market-up-footer></s-cnt-market-up-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-up-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-up-footer>
    `);
  });
});
