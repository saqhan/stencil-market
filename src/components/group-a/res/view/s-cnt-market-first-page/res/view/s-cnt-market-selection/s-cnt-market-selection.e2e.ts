import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-selection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-selection></s-cnt-market-selection>');

    const element = await page.find('s-cnt-market-selection');
    expect(element).toHaveClass('hydrated');
  });
});
