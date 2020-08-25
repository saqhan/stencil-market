# s-cnt-market-top-bar



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                               | Type                    | Default     |
| -------- | --------- | --------------------------------------------------------- | ----------------------- | ----------- |
| `topBar` | --        | объект данных для компонента top-bar и его подкомпонентов | `MarketTopBarInterface` | `undefined` |


## Dependencies

### Used by

 - [s-cnt-market-header](../../..)

### Depends on

- [s-cnt-market-login-and-registration-form](./res/view/s-cnt-market-login-and-registration-form)
- [s-cnt-market-delivery-modal](./res/view/s-cnt-market-delivery-modal)

### Graph
```mermaid
graph TD;
  s-cnt-market-top-bar --> s-cnt-market-login-and-registration-form
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-login-and-registration-form --> s-cnt-market-login-form
  s-cnt-market-login-and-registration-form --> s-cnt-market-registration-form
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  s-cnt-market-header --> s-cnt-market-top-bar
  style s-cnt-market-top-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
