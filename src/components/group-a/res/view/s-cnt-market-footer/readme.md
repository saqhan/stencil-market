# s-cnt-market-footer



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description             | Type                  | Default     |
| ------------ | --------- | ----------------------- | --------------------- | ----------- |
| `footerData` | --        | Данные для всего футера | `footerDataInterface` | `undefined` |


## Dependencies

### Used by

 - [group-a](../../..)
 - [group-b](../../../../group-b)
 - [s-cnt-market-orders-wrapper](../../../../shared/s-cnt-market-orders-wrapper)

### Depends on

- [s-cnt-market-up-footer-form](./res/view/s-cnt-market-up-footer/res/view/s-cnt-market-up-footer-form)
- [s-cnt-market-down-footer](./res/view/s-cnt-market-down-footer)
- [s-cnt-market-footer-info](./res/view/s-cnt-market-footer-info)
- [s-cnt-market-up-footer](./res/view/s-cnt-market-up-footer)

### Graph
```mermaid
graph TD;
  s-cnt-market-footer --> s-cnt-market-up-footer-form
  s-cnt-market-footer --> s-cnt-market-down-footer
  s-cnt-market-footer --> s-cnt-market-footer-info
  s-cnt-market-footer --> s-cnt-market-up-footer
  s-cnt-market-up-footer-form --> s-cnt-market-footer-modal-form
  s-cnt-market-footer-info --> s-cnt-market-footer-info-item
  s-cnt-market-up-footer --> s-cnt-market-footer-items
  group-a --> s-cnt-market-footer
  group-b --> s-cnt-market-footer
  s-cnt-market-orders-wrapper --> s-cnt-market-footer
  style s-cnt-market-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
