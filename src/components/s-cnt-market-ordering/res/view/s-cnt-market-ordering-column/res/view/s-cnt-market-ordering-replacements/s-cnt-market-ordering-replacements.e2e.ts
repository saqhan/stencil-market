import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-replacements', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-replacements></s-cnt-market-ordering-replacements>');

    const element = await page.find('s-cnt-market-replacements');
    expect(element).toHaveClass('hydrated');
  });
});
