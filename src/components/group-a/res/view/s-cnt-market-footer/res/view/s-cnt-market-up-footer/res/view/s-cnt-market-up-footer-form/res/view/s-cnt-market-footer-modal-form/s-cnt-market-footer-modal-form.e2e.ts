import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-footer-modal-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-footer-modal-form></s-cnt-market-footer-modal-form>');

    const element = await page.find('s-cnt-market-footer-modal-form');
    expect(element).toHaveClass('hydrated');
  });
});
