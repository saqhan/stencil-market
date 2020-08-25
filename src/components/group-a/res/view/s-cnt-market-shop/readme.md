# s-cnt-market-shop



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [group-a](../../..)

### Depends on

- [s-cnt-market-promo-slider](./res/view/s-cnt-market-promo-slider)
- [s-cnt-market-products-slider](./res/view/s-cnt-market-products-slider)
- [s-cnt-market-products-list](./res/view/s-cnt-market-products-list)
- [s-cnt-market-recently-watched](./res/view/s-cnt-market-recently-watched)
- [s-cnt-market-modal-window](../../../../shared/s-cnt-market-modal-window)
- [s-cnt-market-back-to-top](../../../../shared/s-cnt-market-back-to-top)

### Graph
```mermaid
graph TD;
  s-cnt-market-shop --> s-cnt-market-promo-slider
  s-cnt-market-shop --> s-cnt-market-products-slider
  s-cnt-market-shop --> s-cnt-market-products-list
  s-cnt-market-shop --> s-cnt-market-recently-watched
  s-cnt-market-shop --> s-cnt-market-modal-window
  s-cnt-market-shop --> s-cnt-market-back-to-top
  s-cnt-market-promo-slider --> s-cnt-market-promo-slider-card
  s-cnt-market-products-slider --> s-cnt-market-products-slider-card
  s-cnt-market-products-list --> s-cnt-market-products-list-card
  s-cnt-market-products-list-card --> s-cnt-market-products-list-item
  s-cnt-market-recently-watched --> s-cnt-market-recently-watched-card
  s-cnt-market-modal-window --> s-cnt-market-product
  s-cnt-market-modal-window --> s-cnt-market-recommended
  s-cnt-market-modal-window --> s-cnt-market-specification
  s-cnt-market-recommended --> s-cnt-market-item-recommended
  group-a --> s-cnt-market-shop
  style s-cnt-market-shop fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
