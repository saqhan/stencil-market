import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "s-cnt-market-back-to-top",
  styleUrl: "s-cnt-market-back-to-top.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketBackToTop implements ComponentInterface {
  /**
   *
   */
  public btnTag: HTMLElement;

  componentDidLoad() {
    window.onscroll = () => {
      this.toggleButtonVisible();
    };
  }

  render() {
    return (
      <div
        class="back-to-top fadeOut"
        ref={(el) => (this.btnTag = el)}
        onClick={() => this.scrollToTop()}
      >
        <button>
          <i class="fas fa-angle-up"></i>
        </button>
      </div>
    );
  }

  /**
   * Метод для смены внешнего вида главного меню при скролле
   */
  public toggleButtonVisible() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 300) {
      this.btnTag.classList.remove("fadeOut");
      this.btnTag.classList.add("fadeIn");
    } else {
      this.btnTag.classList.remove("fadeIn");
      this.btnTag.classList.add("fadeOut");
    }
  }

  /**
   * Прокрутка страницы наверх
   */
  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
