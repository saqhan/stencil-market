import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-top-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-top-bar></s-cnt-market-top-bar>');

    const element = await page.find('s-cnt-market-top-bar');
    expect(element).toHaveClass('hydrated');
  });
});
