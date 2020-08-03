import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketModalWindow } from './s-cnt-market-modal-window';

describe('s-cnt-market-modal-window', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketModalWindow],
      html: `<s-cnt-market-modal-window></s-cnt-market-modal-window>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-modal-window>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-modal-window>
    `);
  });
});
