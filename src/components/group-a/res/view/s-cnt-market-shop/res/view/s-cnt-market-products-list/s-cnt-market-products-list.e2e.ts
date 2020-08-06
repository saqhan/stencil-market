import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-products-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-products-list></s-cnt-market-products-list>');

    const element = await page.find('s-cnt-market-products-list');
    expect(element).toHaveClass('hydrated');
  });
});
