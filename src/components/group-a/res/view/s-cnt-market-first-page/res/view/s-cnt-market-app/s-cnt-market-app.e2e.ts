import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-app></s-cnt-market-app>');

    const element = await page.find('s-cnt-market-app');
    expect(element).toHaveClass('hydrated');
  });
});
