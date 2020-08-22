# group-a



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [s-cnt-market-header-wrapper](../group-b/res/view/s-cnt-market-header-wrapper)
- [s-cnt-market-first-page](./res/view/s-cnt-market-first-page)
- [s-cnt-market-footer](./res/view/s-cnt-market-footer)
- [s-cnt-market-back-to-top](./res/view/shared/s-cnt-market-back-to-top)

### Graph
```mermaid
graph TD;
  group-a --> s-cnt-market-header-wrapper
  group-a --> s-cnt-market-first-page
  group-a --> s-cnt-market-footer
  group-a --> s-cnt-market-back-to-top
  s-cnt-market-header-wrapper --> s-cnt-market-header-base
  s-cnt-market-header-wrapper --> s-cnt-market-header
  s-cnt-market-header --> s-cnt-market-top-bar
  s-cnt-market-header --> s-cnt-market-header-body
  s-cnt-market-header --> s-cnt-market-header-nav
  s-cnt-market-top-bar --> s-cnt-market-login-and-registration-form
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-login-and-registration-form --> s-cnt-market-login-form
  s-cnt-market-login-and-registration-form --> s-cnt-market-registration-form
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  s-cnt-market-header-nav --> s-cnt-market-left-menu-catalog
  s-cnt-market-header-nav --> s-cnt-market-store-select-top
  s-cnt-market-header-nav --> s-cnt-market-account-menu
  s-cnt-market-header-nav --> s-cnt-market-basket
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
  s-cnt-market-footer --> s-cnt-market-up-footer-form
  s-cnt-market-footer --> s-cnt-market-down-footer
  s-cnt-market-footer --> s-cnt-market-footer-info
  s-cnt-market-footer --> s-cnt-market-up-footer
  s-cnt-market-footer-info --> s-cnt-market-footer-info-item
  s-cnt-market-up-footer --> s-cnt-market-footer-items
  my-component --> group-a
  style group-a fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
