import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering></s-cnt-market-ordering>');

    const element = await page.find('s-cnt-market-ordering');
    expect(element).toHaveClass('hydrated');
  });
});
