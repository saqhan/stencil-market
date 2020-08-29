import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-time-panel-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-time-panel-tab></s-cnt-market-ordering-time-panel-tab>');

    const element = await page.find('s-cnt-market-ordering-time-panel-tab');
    expect(element).toHaveClass('hydrated');
  });
});
