import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-item-offer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-item-offer></s-cnt-market-item-offer>');

    const element = await page.find('s-cnt-market-item-offer');
    expect(element).toHaveClass('hydrated');
  });
});
