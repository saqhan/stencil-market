import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketHeaderBody } from './s-cnt-market-header-body';

describe('s-cnt-market-header-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketHeaderBody],
      html: `<s-cnt-market-header-body></s-cnt-market-header-body>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-header-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-header-body>
    `);
  });
});
