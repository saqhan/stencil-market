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
    document.addEventListener('scroll', () => this.toggleClassOnScroll())
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
   * Метод для показа и скрытия кнопки наверх
   */

  public toggleClassOnScroll() {
    let scrollTop = window.scrollY;
    if (scrollTop > 300) {
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
