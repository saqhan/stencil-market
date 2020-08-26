import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-user-account', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-user-account></s-cnt-market-user-account>');

    const element = await page.find('s-cnt-market-user-account');
    expect(element).toHaveClass('hydrated');
  });
});
