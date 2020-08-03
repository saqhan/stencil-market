import { newSpecPage } from '@stencil/core/testing';
import { GroupB } from './group-b';

describe('group-b', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GroupB],
      html: `<group-b></group-b>`,
    });
    expect(page.root).toEqualHtml(`
      <group-b>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </group-b>
    `);
  });
});
