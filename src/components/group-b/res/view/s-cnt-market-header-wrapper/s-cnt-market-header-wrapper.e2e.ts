import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-header-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-header-wrapper></s-cnt-market-header-wrapper>');

    const element = await page.find('s-cnt-market-header-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
