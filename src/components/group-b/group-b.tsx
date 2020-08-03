import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'group-b',
  styleUrl: 'group-b.css',
  shadow: false,
  scoped: true
})
export class GroupB implements ComponentInterface {

  render() {
    return (
      <div class="container" >
        <div class="row">
          <s-cnt-market-header></s-cnt-market-header>
        </div>
      </div>
    );
  }

}
