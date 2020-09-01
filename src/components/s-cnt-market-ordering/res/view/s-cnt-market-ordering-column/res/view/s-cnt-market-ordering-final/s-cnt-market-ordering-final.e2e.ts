import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-final', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-final></s-cnt-market-ordering-final>');

    const element = await page.find('s-cnt-market-ordering-final');
    expect(element).toHaveClass('hydrated');
  });
});
