import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-shop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-shop></s-cnt-market-shop>');

    const element = await page.find('s-cnt-market-shop');
    expect(element).toHaveClass('hydrated');
  });
});
