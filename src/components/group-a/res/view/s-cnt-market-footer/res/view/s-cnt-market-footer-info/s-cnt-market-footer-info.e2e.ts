import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-footer-info', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-footer-info></s-cnt-market-footer-info>');

    const element = await page.find('s-cnt-market-footer-info');
    expect(element).toHaveClass('hydrated');
  });
});
