import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'group-a',
  styleUrl: 'group-a.css',
  shadow: false,
  scoped: true
})
export class GroupA implements ComponentInterface {

  render() {
    return (
      <s-cnt-market-shop></s-cnt-market-shop>
    );
  }

}
