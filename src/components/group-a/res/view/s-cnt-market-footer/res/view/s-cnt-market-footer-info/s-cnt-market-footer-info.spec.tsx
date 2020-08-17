import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketFooterInfo } from './s-cnt-market-footer-info';

describe('s-cnt-market-footer-info', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketFooterInfo],
      html: `<s-cnt-market-footer-info></s-cnt-market-footer-info>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-footer-info>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-footer-info>
    `);
  });
});
