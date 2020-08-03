import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'group-b',
  styleUrl: 'group-b.css',
  shadow: true,
})
export class GroupB implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
