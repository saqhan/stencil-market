import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-offer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-offer></s-cnt-market-offer>');

    const element = await page.find('s-cnt-market-offer');
    expect(element).toHaveClass('hydrated');
  });
});
