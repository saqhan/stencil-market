import { newSpecPage } from '@stencil/core/testing';
<<<<<<< HEAD
import { SCntMarketTopBar } from './s-cnt-market-top-bar';

describe('s-cnt-market-top-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketTopBar],
      html: `<s-cnt-market-top-bar></s-cnt-market-top-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-top-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-top-bar>
=======
import { SCntMarketHeader } from './s-cnt-market-header';

describe('s-cnt-market-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketHeader],
      html: `<s-cnt-market-header></s-cnt-market-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-header>
>>>>>>> b34cf2e6f2a4c5bed1b5bde096121cfc3f1c50c2
    `);
  });
});
