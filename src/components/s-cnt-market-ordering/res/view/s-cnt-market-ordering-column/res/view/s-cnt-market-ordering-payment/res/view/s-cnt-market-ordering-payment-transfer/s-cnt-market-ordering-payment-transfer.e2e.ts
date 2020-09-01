import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-payment-transer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-payment-transfer></s-cnt-market-ordering-payment-transfer>');

    const element = await page.find('s-cnt-market-ordering-payment-transer');
    expect(element).toHaveClass('hydrated');
  });
});
