import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketFooterInfoItem } from './s-cnt-market-footer-info-item';

describe('s-cnt-market-footer-info-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketFooterInfoItem],
      html: `<s-cnt-market-footer-info-item></s-cnt-market-footer-info-item>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-footer-info-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-footer-info-item>
    `);
  });
});
