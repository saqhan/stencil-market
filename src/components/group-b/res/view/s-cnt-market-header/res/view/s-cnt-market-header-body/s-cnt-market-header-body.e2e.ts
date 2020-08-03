import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-header-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-header-body></s-cnt-market-header-body>');

    const element = await page.find('s-cnt-market-header-body');
    expect(element).toHaveClass('hydrated');
  });
});
