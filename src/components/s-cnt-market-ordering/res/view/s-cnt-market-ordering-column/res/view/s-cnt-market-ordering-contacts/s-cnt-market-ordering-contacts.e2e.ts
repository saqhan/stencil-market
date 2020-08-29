import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-contacts', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-contacts></s-cnt-market-ordering-contacts>');

    const element = await page.find('s-cnt-market-ordering-contacts');
    expect(element).toHaveClass('hydrated');
  });
});
