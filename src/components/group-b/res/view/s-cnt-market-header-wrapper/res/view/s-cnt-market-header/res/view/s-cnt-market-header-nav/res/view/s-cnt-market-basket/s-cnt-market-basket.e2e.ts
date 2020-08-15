import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-basket', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-basket></s-cnt-market-basket>');

    const element = await page.find('s-cnt-market-basket');
    expect(element).toHaveClass('hydrated');
  });
});
