import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-footer></s-cnt-market-footer>');

    const element = await page.find('s-cnt-market-footer');
    expect(element).toHaveClass('hydrated');
  });
});
