import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-products-list-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-products-list-card></s-cnt-market-products-list-card>');

    const element = await page.find('s-cnt-market-products-list-card');
    expect(element).toHaveClass('hydrated');
  });
});
