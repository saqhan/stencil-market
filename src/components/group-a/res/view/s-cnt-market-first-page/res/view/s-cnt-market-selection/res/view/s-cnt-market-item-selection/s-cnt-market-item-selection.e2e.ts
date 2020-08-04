import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-item-selection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-item-selection></s-cnt-market-item-selection>');

    const element = await page.find('s-cnt-market-item-selection');
    expect(element).toHaveClass('hydrated');
  });
});
