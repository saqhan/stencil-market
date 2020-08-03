import { newE2EPage } from '@stencil/core/testing';

describe('group-a', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<group-a></group-a>');

    const element = await page.find('group-a');
    expect(element).toHaveClass('hydrated');
  });
});
