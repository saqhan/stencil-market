import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketSpecification } from './s-cnt-market-specification';

describe('s-cnt-market-specification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketSpecification],
      html: `<s-cnt-market-specification></s-cnt-market-specification>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-specification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-specification>
    `);
  });
});
