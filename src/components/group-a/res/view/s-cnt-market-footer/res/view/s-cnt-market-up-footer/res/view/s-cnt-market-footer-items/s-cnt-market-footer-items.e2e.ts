import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-footer-items', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-footer-items></s-cnt-market-footer-items>');

    const element = await page.find('s-cnt-market-footer-items');
    expect(element).toHaveClass('hydrated');
  });
});
