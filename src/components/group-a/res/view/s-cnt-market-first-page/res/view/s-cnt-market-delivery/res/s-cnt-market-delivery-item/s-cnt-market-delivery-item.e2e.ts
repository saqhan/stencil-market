import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-delivery-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-delivery-item></s-cnt-market-delivery-item>');

    const element = await page.find('s-cnt-market-delivery-item');
    expect(element).toHaveClass('hydrated');
  });
});
