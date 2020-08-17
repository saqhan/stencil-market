import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketApp } from './s-cnt-market-app';

describe('s-cnt-market-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketApp],
      html: `<s-cnt-market-app></s-cnt-market-app>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-app>
    `);
  });
});
