import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-statistics', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-statistics></s-cnt-market-statistics>');

    const element = await page.find('s-cnt-market-statistics');
    expect(element).toHaveClass('hydrated');
  });
});
