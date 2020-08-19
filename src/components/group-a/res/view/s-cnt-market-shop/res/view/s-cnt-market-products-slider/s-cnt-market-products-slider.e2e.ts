import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-products-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-products-slider></s-cnt-market-products-slider>');

    const element = await page.find('s-cnt-market-products-slider');
    expect(element).toHaveClass('hydrated');
  });
});
