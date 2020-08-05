import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-products-slider-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-products-slider-card></s-cnt-market-products-slider-card>');

    const element = await page.find('s-cnt-market-products-slider-card');
    expect(element).toHaveClass('hydrated');
  });
});
