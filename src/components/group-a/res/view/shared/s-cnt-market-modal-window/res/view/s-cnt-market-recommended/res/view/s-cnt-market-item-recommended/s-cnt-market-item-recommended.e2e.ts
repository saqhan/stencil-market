import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-item-recommended', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-item-recommended></s-cnt-market-item-recommended>');

    const element = await page.find('s-cnt-market-item-recommended');
    expect(element).toHaveClass('hydrated');
  });
});
