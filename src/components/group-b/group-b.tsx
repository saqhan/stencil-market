import {Component, ComponentInterface, h} from '@stencil/core';
import {header} from "../../utils/mock-b";

@Component({
  tag: 'group-b',
  styleUrl: 'group-b.css',
  shadow: false,
  scoped: true
})
export class GroupB implements ComponentInterface {

  render() {
    return (
          <s-cnt-market-header categories={header}></s-cnt-market-header>
    );
  }

}
