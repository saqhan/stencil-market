import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketChoice } from './s-cnt-market-choice';

describe('s-cnt-market-choice', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketChoice],
      html: `<s-cnt-market-choice></s-cnt-market-choice>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-choice>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-choice>
    `);
  });
});
