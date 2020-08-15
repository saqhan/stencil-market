import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-store-select-top', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-store-select-top></s-cnt-market-store-select-top>');

    const element = await page.find('s-cnt-market-store-select-top');
    expect(element).toHaveClass('hydrated');
  });
});
