import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-specification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-specification></s-cnt-market-specification>');

    const element = await page.find('s-cnt-market-specification');
    expect(element).toHaveClass('hydrated');
  });
});
