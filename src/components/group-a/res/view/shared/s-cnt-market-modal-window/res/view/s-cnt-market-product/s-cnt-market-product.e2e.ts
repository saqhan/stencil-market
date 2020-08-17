import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-product', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-product></s-cnt-market-product>');

    const element = await page.find('s-cnt-market-product');
    expect(element).toHaveClass('hydrated');
  });
});
