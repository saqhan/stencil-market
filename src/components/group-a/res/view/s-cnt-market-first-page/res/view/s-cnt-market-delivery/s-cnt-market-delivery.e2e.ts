import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-delivery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-delivery></s-cnt-market-delivery>');

    const element = await page.find('s-cnt-market-delivery');
    expect(element).toHaveClass('hydrated');
  });
});
