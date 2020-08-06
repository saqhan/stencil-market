import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-item-statistics', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-item-statistics></s-cnt-market-item-statistics>');

    const element = await page.find('s-cnt-market-item-statistics');
    expect(element).toHaveClass('hydrated');
  });
});
