# group-a



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-cnt-market-header-wrapper](../group-b/res/view/s-cnt-market-header-wrapper)
- [s-cnt-market-shop](./res/view/s-cnt-market-shop)
- [s-cnt-market-footer](./res/view/s-cnt-market-footer)
- [s-cnt-market-back-to-top](../shared/s-cnt-market-back-to-top)

### Graph
```mermaid
graph TD;
  group-a --> s-cnt-market-header-wrapper
  group-a --> s-cnt-market-shop
  group-a --> s-cnt-market-footer
  group-a --> s-cnt-market-back-to-top
  s-cnt-market-header-wrapper --> s-cnt-market-header-base
  s-cnt-market-header-wrapper --> s-cnt-market-header
  s-cnt-market-header --> s-cnt-market-top-bar
  s-cnt-market-header --> s-cnt-market-header-body
  s-cnt-market-header --> s-cnt-market-header-nav
  s-cnt-market-top-bar --> s-cnt-market-login-and-registration-form
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-login-and-registration-form --> s-cnt-market-remind-password
  s-cnt-market-login-and-registration-form --> s-cnt-market-login-form
  s-cnt-market-login-and-registration-form --> s-cnt-market-registration-form
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  s-cnt-market-header-nav --> s-cnt-market-left-menu-catalog
  s-cnt-market-header-nav --> s-cnt-market-store-select-top
  s-cnt-market-header-nav --> s-cnt-market-account-menu
  s-cnt-market-header-nav --> s-cnt-market-basket
  s-cnt-market-basket --> s-cnt-market-products-slider
  s-cnt-market-products-slider --> s-cnt-market-products-slider-card
  s-cnt-market-shop --> s-cnt-market-product-page
  s-cnt-market-shop --> s-cnt-market-products-list
  s-cnt-market-shop --> s-cnt-market-promo-slider
  s-cnt-market-shop --> s-cnt-market-products-slider
  s-cnt-market-shop --> s-cnt-market-recently-watched
  s-cnt-market-shop --> s-cnt-market-modal-window
  s-cnt-market-shop --> s-cnt-market-back-to-top
  s-cnt-market-product-page --> s-cnt-market-product-filter-said-bar
  s-cnt-market-product-page --> s-cnt-market-products-slider-card
  s-cnt-market-product-page --> s-cnt-market-products-list-item
  s-cnt-market-products-list --> s-cnt-market-products-list-card
  s-cnt-market-products-list-card --> s-cnt-market-products-list-item
  s-cnt-market-promo-slider --> s-cnt-market-promo-slider-card
  s-cnt-market-recently-watched --> s-cnt-market-recently-watched-card
  s-cnt-market-modal-window --> s-cnt-market-product
  s-cnt-market-modal-window --> s-cnt-market-recommended
  s-cnt-market-modal-window --> s-cnt-market-specification
  s-cnt-market-recommended --> s-cnt-market-item-recommended
  s-cnt-market-footer --> s-cnt-market-up-footer-form
  s-cnt-market-footer --> s-cnt-market-down-footer
  s-cnt-market-footer --> s-cnt-market-footer-info
  s-cnt-market-footer --> s-cnt-market-up-footer
  s-cnt-market-up-footer-form --> s-cnt-market-footer-modal-form
  s-cnt-market-footer-info --> s-cnt-market-footer-info-item
  s-cnt-market-up-footer --> s-cnt-market-footer-items
  style group-a fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
