import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-courier', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-courier></s-cnt-market-courier>');

    const element = await page.find('s-cnt-market-courier');
    expect(element).toHaveClass('hydrated');
  });
});
