import { newE2EPage } from '@stencil/core/testing';

describe('group-b', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<group-b></group-b>');

    const element = await page.find('group-b');
    expect(element).toHaveClass('hydrated');
  });
});
