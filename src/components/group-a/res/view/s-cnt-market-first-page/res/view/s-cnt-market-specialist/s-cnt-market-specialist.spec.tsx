import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketSpecialist } from './s-cnt-market-specialist';

describe('s-cnt-market-specialist', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketSpecialist],
      html: `<s-cnt-market-specialist></s-cnt-market-specialist>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-specialist>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-specialist>
    `);
  });
});
