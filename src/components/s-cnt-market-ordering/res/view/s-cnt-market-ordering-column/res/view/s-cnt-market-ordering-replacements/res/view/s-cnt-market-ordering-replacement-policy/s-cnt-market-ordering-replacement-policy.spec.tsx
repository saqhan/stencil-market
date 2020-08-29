import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingReplacementPolicy } from './s-cnt-market-ordering-replacement-policy';

describe('s-cnt-market-ordering-replacement-policy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingReplacementPolicy],
      html: `<s-cnt-market-ordering-replacement-policy></s-cnt-market-ordering-replacement-policy>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-replacement-policy>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-replacement-policy>
    `);
  });
});
