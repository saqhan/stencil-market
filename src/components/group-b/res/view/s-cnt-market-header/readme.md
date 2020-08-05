# s-cnt-market-header



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description              | Type  | Default     |
| ------------ | ------------ | ------------------------ | ----- | ----------- |
| `categories` | `categories` | Массив данных для хедера | `any` | `undefined` |


## Dependencies

### Used by

 - [group-b](../../..)

### Depends on

- [s-cnt-market-top-bar](./res/view/s-cnt-market-top-bar)
- [s-cnt-market-header-body](./res/view/s-cnt-market-header-body)
- [s-cnt-market-header-nav](./res/view/s-cnt-market-header-nav)

### Graph
```mermaid
graph TD;
  s-cnt-market-header --> s-cnt-market-top-bar
  s-cnt-market-header --> s-cnt-market-header-body
  s-cnt-market-header --> s-cnt-market-header-nav
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  group-b --> s-cnt-market-header
  style s-cnt-market-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
