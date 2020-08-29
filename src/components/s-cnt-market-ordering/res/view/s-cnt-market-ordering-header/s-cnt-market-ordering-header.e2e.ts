import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-header></s-cnt-market-ordering-header>');

    const element = await page.find('s-cnt-market-ordering-header');
    expect(element).toHaveClass('hydrated');
  });
});
