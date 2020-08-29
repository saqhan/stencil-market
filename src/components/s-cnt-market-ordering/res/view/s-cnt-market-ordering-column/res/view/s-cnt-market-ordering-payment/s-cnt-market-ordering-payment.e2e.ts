import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-payment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-payment></s-cnt-market-ordering-payment>');

    const element = await page.find('s-cnt-market-ordering-payment');
    expect(element).toHaveClass('hydrated');
  });
});
