# s-cnt-market-first-page



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [group-a](../../..)

### Depends on

- [s-cnt-market-selection](./res/view/s-cnt-market-selection)
- [s-cnt-market-offer](./res/view/s-cnt-market-offer)
- [s-cnt-market-statistics](./res/view/s-cnt-market-statistics)
- [s-cnt-market-delivery](./res/view/s-cnt-market-delivery)
- [s-cnt-market-choice](./res/view/s-cnt-market-choice)
- [s-cnt-market-specialist](./res/view/s-cnt-market-specialist)
- [s-cnt-market-courier](./res/view/s-cnt-market-courier)
- [s-cnt-market-app](./res/view/s-cnt-market-app)

### Graph
```mermaid
graph TD;
  s-cnt-market-first-page --> s-cnt-market-selection
  s-cnt-market-first-page --> s-cnt-market-offer
  s-cnt-market-first-page --> s-cnt-market-statistics
  s-cnt-market-first-page --> s-cnt-market-delivery
  s-cnt-market-first-page --> s-cnt-market-choice
  s-cnt-market-first-page --> s-cnt-market-specialist
  s-cnt-market-first-page --> s-cnt-market-courier
  s-cnt-market-first-page --> s-cnt-market-app
  s-cnt-market-selection --> s-cnt-market-item-selection
  s-cnt-market-offer --> s-cnt-market-item-offer
  s-cnt-market-statistics --> s-cnt-market-item-statistics
  s-cnt-market-delivery --> s-cnt-market-delivery-item
  s-cnt-market-choice --> s-cnt-market-item-choice
  s-cnt-market-specialist --> s-cnt-market-item-specialist
  s-cnt-market-courier --> s-cnt-market-item-courier
  group-a --> s-cnt-market-first-page
  style s-cnt-market-first-page fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
