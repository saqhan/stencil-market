import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-promo-slider-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-promo-slider-card></s-cnt-market-promo-slider-card>');

    const element = await page.find('s-cnt-market-promo-slider-card');
    expect(element).toHaveClass('hydrated');
  });
});
