import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-specialist', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-specialist></s-cnt-market-specialist>');

    const element = await page.find('s-cnt-market-specialist');
    expect(element).toHaveClass('hydrated');
  });
});
