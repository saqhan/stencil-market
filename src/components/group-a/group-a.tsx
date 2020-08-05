import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "group-a",
  styleUrl: "group-a.css",
  shadow: false,
  scoped: true,
})
export class GroupA implements ComponentInterface {
  render() {
    return (
      <div>
        {/*<s-cnt-market-modal-window />*/}
        <s-cnt-market-first-page/>
        {/*<s-cnt-market-shop/>*/}
      </div>
    );
  }
}
