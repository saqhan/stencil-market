import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-time-of-receipt', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-time-of-receipt></s-cnt-market-ordering-time-of-receipt>');

    const element = await page.find('s-cnt-market-ordering-time-of-receipt');
    expect(element).toHaveClass('hydrated');
  });
});
