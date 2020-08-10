import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-up-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-up-footer></s-cnt-market-up-footer>');

    const element = await page.find('s-cnt-market-up-footer');
    expect(element).toHaveClass('hydrated');
  });
});
