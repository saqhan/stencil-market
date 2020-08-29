import { Component, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
  scoped: true,
})
export class MyComponent {
  render() {
    // return <group-a></group-a>;
    // return <group-b> </group-b>;
    return <s-cnt-market-ordering></s-cnt-market-ordering>
  }
}
