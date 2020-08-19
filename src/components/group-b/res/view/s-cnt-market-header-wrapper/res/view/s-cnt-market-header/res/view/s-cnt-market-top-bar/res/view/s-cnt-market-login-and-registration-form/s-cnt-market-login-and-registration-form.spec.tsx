import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketLoginAndRegistrationForm } from './s-cnt-market-login-and-registration-form';

describe('s-cnt-market-login-and-registration-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketLoginAndRegistrationForm],
      html: `<s-cnt-market-login-and-registration-form></s-cnt-market-login-and-registration-form>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-login-and-registration-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-login-and-registration-form>
    `);
  });
});
