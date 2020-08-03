import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-promo-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-promo-slider></s-cnt-market-promo-slider>');

    const element = await page.find('s-cnt-market-promo-slider');
    expect(element).toHaveClass('hydrated');
  });
});
