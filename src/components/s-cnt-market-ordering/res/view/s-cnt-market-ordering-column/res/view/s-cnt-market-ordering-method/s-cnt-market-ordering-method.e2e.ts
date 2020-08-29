import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-method></s-cnt-market-ordering-method>');

    const element = await page.find('s-cnt-market-ordering-panel');
    expect(element).toHaveClass('hydrated');
  });
});
