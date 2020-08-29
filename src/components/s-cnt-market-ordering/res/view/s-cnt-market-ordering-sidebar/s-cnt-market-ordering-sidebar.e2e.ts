import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-sidebar></s-cnt-market-ordering-sidebar>');

    const element = await page.find('s-cnt-market-ordering-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
