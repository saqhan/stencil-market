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
<<<<<<< HEAD
        <s-cnt-market-first-page/>
        {/*<s-cnt-market-shop/>*/}
=======
        {/*<s-cnt-market-first-page/>*/}
<<<<<<< HEAD
        {/*<s-cnt-market-shop/>*/}
        <s-cnt-market-footer />
=======
        <s-cnt-market-shop/>
>>>>>>> 1d42890fbec272d513ae2ef3799134bbaf2fdfbc
>>>>>>> 5e59f25b0762a15de57b721f296aa7baef3204f3
      </div>
    );
  }
}
