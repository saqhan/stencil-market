# group-b



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [s-cnt-market-header](./res/view/s-cnt-market-header)

### Graph
```mermaid
graph TD;
  group-b --> s-cnt-market-header
  s-cnt-market-header --> s-cnt-market-top-bar
  s-cnt-market-header --> s-cnt-market-header-body
  s-cnt-market-header --> s-cnt-market-header-nav
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  my-component --> group-b
  style group-b fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
