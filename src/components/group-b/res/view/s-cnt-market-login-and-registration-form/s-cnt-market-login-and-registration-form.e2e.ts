import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-login-and-registration-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-login-and-registration-form></s-cnt-market-login-and-registration-form>');

    const element = await page.find('s-cnt-market-login-and-registration-form');
    expect(element).toHaveClass('hydrated');
  });
});
