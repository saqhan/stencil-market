import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-shipments', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-shipments></s-cnt-market-shipments>');

    const element = await page.find('s-cnt-market-shipments');
    expect(element).toHaveClass('hydrated');
  });
});
