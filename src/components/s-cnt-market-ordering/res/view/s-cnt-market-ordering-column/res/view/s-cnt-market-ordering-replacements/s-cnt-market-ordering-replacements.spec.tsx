import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingReplacements } from './s-cnt-market-ordering-replacements';

describe('s-cnt-market-replacements', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingReplacements],
      html: `<s-cnt-market-replacements></s-cnt-market-replacements>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-replacements>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-replacements>
    `);
  });
});
