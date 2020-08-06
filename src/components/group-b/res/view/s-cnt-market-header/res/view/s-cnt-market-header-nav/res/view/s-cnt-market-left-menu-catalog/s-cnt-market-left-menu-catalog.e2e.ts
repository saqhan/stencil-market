import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-left-menu-catalog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-left-menu-catalog></s-cnt-market-left-menu-catalog>');

    const element = await page.find('s-cnt-market-left-menu-catalog');
    expect(element).toHaveClass('hydrated');
  });
});
