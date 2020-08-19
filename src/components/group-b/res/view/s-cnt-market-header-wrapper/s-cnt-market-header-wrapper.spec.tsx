import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketHeaderWrapper } from './s-cnt-market-header-wrapper';

describe('s-cnt-market-header-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketHeaderWrapper],
      html: `<s-cnt-market-header-wrapper></s-cnt-market-header-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-header-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-header-wrapper>
    `);
  });
});
