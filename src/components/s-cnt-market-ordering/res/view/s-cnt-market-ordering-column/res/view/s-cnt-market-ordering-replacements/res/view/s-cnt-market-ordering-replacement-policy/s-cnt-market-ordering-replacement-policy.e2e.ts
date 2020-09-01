import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-replacement-policy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-replacement-policy></s-cnt-market-ordering-replacement-policy>');

    const element = await page.find('s-cnt-market-ordering-replacement-policy');
    expect(element).toHaveClass('hydrated');
  });
});
