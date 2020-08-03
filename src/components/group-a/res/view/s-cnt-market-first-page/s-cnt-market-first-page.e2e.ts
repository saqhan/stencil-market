import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-first-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-first-page></s-cnt-market-first-page>');

    const element = await page.find('s-cnt-market-first-page');
    expect(element).toHaveClass('hydrated');
  });
});
