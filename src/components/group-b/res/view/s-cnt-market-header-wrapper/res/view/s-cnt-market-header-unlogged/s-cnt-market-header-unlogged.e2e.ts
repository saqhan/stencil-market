import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-header-unlogged', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-header-unlogged></s-cnt-market-header-unlogged>');

    const element = await page.find('s-cnt-market-header-unlogged');
    expect(element).toHaveClass('hydrated');
  });
});
