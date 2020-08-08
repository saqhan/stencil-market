import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-login-and-registration-form',
  styleUrl: 's-cnt-market-login-and-registration-form.css',
  shadow: true,
})
export class SCntMarketLoginAndRegistrationForm implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
