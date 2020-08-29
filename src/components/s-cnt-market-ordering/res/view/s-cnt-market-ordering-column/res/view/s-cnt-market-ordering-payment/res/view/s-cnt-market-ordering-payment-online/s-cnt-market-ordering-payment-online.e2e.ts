import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-payment-online', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-payment-online></s-cnt-market-ordering-payment-online>');

    const element = await page.find('s-cnt-market-ordering-payment-online');
    expect(element).toHaveClass('hydrated');
  });
});
