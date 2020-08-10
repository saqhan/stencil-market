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
        {/*<s-cnt-market-first-page/>*/}
<<<<<<< HEAD
        {/*<s-cnt-market-shop/>*/}
        <s-cnt-market-footer />
=======
        <s-cnt-market-shop/>
>>>>>>> 1d42890fbec272d513ae2ef3799134bbaf2fdfbc
      </div>
    );
  }
}
