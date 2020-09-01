# s-cnt-market-ordering



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-cnt-market-ordering-header](./res/view/s-cnt-market-ordering-header)
- [s-cnt-market-ordering-column](./res/view/s-cnt-market-ordering-column)
- [s-cnt-market-ordering-sidebar](./res/view/s-cnt-market-ordering-sidebar)

### Graph
```mermaid
graph TD;
  s-cnt-market-ordering --> s-cnt-market-ordering-header
  s-cnt-market-ordering --> s-cnt-market-ordering-column
  s-cnt-market-ordering --> s-cnt-market-ordering-sidebar
  s-cnt-market-ordering-column --> s-cnt-market-ordering-method
  s-cnt-market-ordering-column --> s-cnt-market-ordering-contacts
  s-cnt-market-ordering-column --> s-cnt-market-ordering-replacements
  s-cnt-market-ordering-column --> s-cnt-market-ordering-payment
  s-cnt-market-ordering-column --> s-cnt-market-ordering-time-of-receipt
  s-cnt-market-ordering-column --> s-cnt-market-ordering-final
  s-cnt-market-ordering-replacements --> s-cnt-market-ordering-replacement-policy
  s-cnt-market-ordering-payment --> s-cnt-market-ordering-payment-transfer
  s-cnt-market-ordering-time-of-receipt --> s-cnt-market-ordering-time-panel-tab
  s-cnt-market-ordering-time-of-receipt --> s-cnt-market-ordering-time-panel-item
  style s-cnt-market-ordering fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
