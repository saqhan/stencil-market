import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-account-menu",
  styleUrl: "s-cnt-market-account-menu.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketAccountMenu implements ComponentInterface {
  /**
   * background overlay account menu tag
   * */
  private backDropTag: HTMLElement;

  /**
   * close account menu modal
   * */
  @Event() closeAccountMenu: EventEmitter<void>;

  render() {
    return (
      <div>
        <div
          class="drawer-backdrop opened "
          ref={(el) => (this.backDropTag = el)}
          onClick={(event) => this.clickOnCloseAccountHandler(event)}
        ></div>
        <div class="account-menu">
          <div class="account-menu-header">Saqhan</div>
          <div class="account-menu-separator"></div>
          <div class="account-menu-i">
            <a class="account-menu-link">
              <div class="account-menu-link-ico">
                <i class="far fa-user-circle"></i>
              </div>
              <div class="account-menu-link-text">Профиль</div>
            </a>
          </div>
          <div class="account-menu-i">
            <a class="account-menu-link">
              <div class="account-menu-link-ico">
                <i class="fas fa-info-circle"></i>
              </div>
              <div class="account-menu-link-text">Условия использования</div>
            </a>
          </div>
          <div class="account-menu-separator"></div>
          <div class="account-menu-i">
            <button class="account-menu-link">
              <div class="account-menu-link-ico">
                <i class="fas fa-door-open"></i>
              </div>
              <div class="account-menu-link-text">Выйти</div>
            </button>
          </div>
          <div class="account-menu-separator"></div>
          <div class="account-menu-footer">
            <button class="account-menu-footer-link">Доставка</button>
            <a class="account-menu-footer-link">FAQ</a>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Клик на закрытие модалки
   * */
  public clickOnCloseAccountHandler(event): void  {
    if (event.target === this.backDropTag) {
      this.closeAccountMenu.emit();
    }
  }
}
