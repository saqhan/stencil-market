import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'group-b',
  styleUrl: 'group-b.css',
  shadow: false,
  scoped: true
})
export class GroupB implements ComponentInterface {
  @Prop()payload: any;

  render() {
    return (
          <s-cnt-market-header topBar={this.payload}></s-cnt-market-header>
    );
  }

}
