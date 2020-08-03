import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-modal-window', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-modal-window></s-cnt-market-modal-window>');

    const element = await page.find('s-cnt-market-modal-window');
    expect(element).toHaveClass('hydrated');
  });
});
