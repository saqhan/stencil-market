import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-choice', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-choice></s-cnt-market-choice>');

    const element = await page.find('s-cnt-market-choice');
    expect(element).toHaveClass('hydrated');
  });
});
