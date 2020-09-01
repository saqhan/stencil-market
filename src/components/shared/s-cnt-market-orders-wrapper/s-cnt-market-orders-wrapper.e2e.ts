import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-orders-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-orders-wrapper></s-cnt-market-orders-wrapper>');

    const element = await page.find('s-cnt-market-orders-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
