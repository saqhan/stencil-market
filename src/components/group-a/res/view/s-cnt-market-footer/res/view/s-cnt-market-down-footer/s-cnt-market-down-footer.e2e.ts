import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-down-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-down-footer></s-cnt-market-down-footer>');

    const element = await page.find('s-cnt-market-down-footer');
    expect(element).toHaveClass('hydrated');
  });
});
