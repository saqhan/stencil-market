import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-column></s-cnt-market-ordering-column>');

    const element = await page.find('s-cnt-market-ordering-column');
    expect(element).toHaveClass('hydrated');
  });
});
