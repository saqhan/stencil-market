import { newSpecPage } from '@stencil/core/testing';
import { GroupA } from './group-a';

describe('group-a', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GroupA],
      html: `<group-a></group-a>`,
    });
    expect(page.root).toEqualHtml(`
      <group-a>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </group-a>
    `);
  });
});
