import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-footer-info-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-footer-info-item></s-cnt-market-footer-info-item>');

    const element = await page.find('s-cnt-market-footer-info-item');
    expect(element).toHaveClass('hydrated');
  });
});
