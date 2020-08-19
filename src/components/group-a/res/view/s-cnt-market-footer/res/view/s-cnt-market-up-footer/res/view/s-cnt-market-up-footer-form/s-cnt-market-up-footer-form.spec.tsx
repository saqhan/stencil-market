import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketUpFooterForm } from './s-cnt-market-up-footer-form';

describe('s-cnt-market-up-footer-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketUpFooterForm],
      html: `<s-cnt-market-up-footer-form></s-cnt-market-up-footer-form>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-up-footer-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-up-footer-form>
    `);
  });
});
