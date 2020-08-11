import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-recommended', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-recommended></s-cnt-market-recommended>');

    const element = await page.find('s-cnt-market-recommended');
    expect(element).toHaveClass('hydrated');
  });
});
