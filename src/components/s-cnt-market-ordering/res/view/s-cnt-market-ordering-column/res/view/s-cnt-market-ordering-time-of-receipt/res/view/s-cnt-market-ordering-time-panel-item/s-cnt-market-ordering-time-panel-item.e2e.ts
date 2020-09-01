import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-time-panel-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-time-panel-item></s-cnt-market-ordering-time-panel-item>');

    const element = await page.find('s-cnt-market-ordering-time-panel-item');
    expect(element).toHaveClass('hydrated');
  });
});
