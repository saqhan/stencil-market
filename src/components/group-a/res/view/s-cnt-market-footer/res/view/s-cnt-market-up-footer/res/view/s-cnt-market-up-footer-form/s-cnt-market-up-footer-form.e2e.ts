import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-up-footer-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-up-footer-form></s-cnt-market-up-footer-form>');

    const element = await page.find('s-cnt-market-up-footer-form');
    expect(element).toHaveClass('hydrated');
  });
});
