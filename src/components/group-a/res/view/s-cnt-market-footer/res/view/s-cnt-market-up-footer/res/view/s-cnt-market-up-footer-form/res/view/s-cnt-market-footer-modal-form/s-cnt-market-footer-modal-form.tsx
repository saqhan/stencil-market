import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event,
  State,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-footer-modal-form",
  styleUrl: "s-cnt-market-footer-modal-form.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketFooterModalForm implements ComponentInterface {

  /**
   * show modal form
   * */
  @Prop() showModalForm: boolean;

  /**
   *
   * */
  @Event() clickOnCloseModalForm: EventEmitter;

  /**
   *
   * */
  @State() backgroundModalFormTagState: HTMLElement;

  /**
   * тег инпута для имени пользователя
   * */
  private inputNameTag: HTMLInputElement;

  /**
   *
   * */
  private inputNameParentTag: HTMLElement;

  /**
   *
   * */
  private inputTelephoneTag: HTMLInputElement;

  /**
   *
   * */
  private inputTelephoneParentTag: HTMLElement;

  /**
   *
   * */
  private inputCityTag: HTMLInputElement;

  /**
   *
   * */
  private inputCityParentTag: HTMLElement;

  /**
   *
   * */
  private inputEmailParentTag:HTMLElement ;

  /**
   *
   * */
  private inputEmailTag: HTMLInputElement;

  render() {
    return (
      <div>
        <div
          class={this.showModalForm ? "drawer-backdrop opened " : "drawer-backdrop"}
          onClick={(event) => this.closeModalFormHandler(event)}
          ref={(el) => (this.backgroundModalFormTagState = el)}
        ></div>
        <div
          class={
            this.showModalForm
              ? "drawer-footer-modal opened"
              : "drawer-footer-modal"
          }
        >
          <div class="drawer-content">
            <div class="wrapper-content">
              <div class="modal-nav">
                <button
                  class="close-modal-form"
                  onClick={() => this.closeModalFormButton()}
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-content">
                <header>
                  <div class="title">Обратная связь</div>
                  <div class="subtitle">
                    Мы всегда готовы ответить на любой вопрос, а также услышать
                    ваши отзывы и предложения по работе нашего сервиса.
                  </div>
                </header>
                <form>
                  <div class="input-wrapper">
                    <div class="left">
                      <div
                        class="input-parent "
                        ref={(el) => (this.inputNameParentTag = el)}
                      >
                        <input
                          type="text"
                          placeholder="Ваше имя"
                          ref={(el) => (this.inputNameTag = el)}
                          onBlur={() =>
                            this.checkInputHandler(this.inputNameParentTag, this.inputNameTag)
                          }
                          onInput={() =>
                            this.checkInputFocusHandler(this.inputNameParentTag, this.inputNameTag)
                          }
                        />
                        <span class="error-text">Укажите имя</span>
                      </div>
                      <div class="input-parent"
                        ref={(el)=> (this.inputTelephoneParentTag = el)}
                      >
                        <input type="text" placeholder="Мобильный телефон"
                               ref={(el) => (this.inputTelephoneTag = el)}
                               onBlur={() =>
                                 this.checkInputHandler(this.inputTelephoneParentTag, this.inputTelephoneTag)
                               }
                               onInput={() =>
                                 this.checkTelephoneInputFocusHandler(this.inputTelephoneParentTag, this.inputTelephoneTag)
                               }
                        />
                        <span class="error-text">
                          Некорректный номер телефона
                        </span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="input-parent"
                        ref={el => this.inputEmailParentTag = el}
                      >
                        <input
                          type="text"
                          placeholder="Адрес электронной почты"
                          ref={el => this.inputEmailTag = el}
                          onBlur={() =>
                            this.checkInputHandler(this.inputEmailParentTag, this.inputEmailTag)
                          }
                          onInput={() =>
                            this.checkTelephoneInputFocusHandler(this.inputEmailParentTag, this.inputEmailTag)
                          }
                        />
                        <span class="error-text">Укажите email</span>
                      </div>
                      <div class="input-parent"
                           ref={(el) => this.inputCityParentTag = el}
                      >
                        <input type="text" placeholder="Ваш город"
                               ref={(el) => this.inputCityTag = el}
                               onBlur={() =>
                                 this.checkInputHandler(this.inputCityParentTag, this.inputCityTag)
                               }
                               onInput={() =>
                                 this.checkInputFocusHandler(this.inputCityParentTag, this.inputCityTag)
                               }
                        />
                        <span class="error-text">Укажите свой город</span>
                      </div>
                    </div>
                  </div>
                  <hr class="form-hr" />
                  <div class="subject-wrapper">
                    <button class="subject-btn selected">
                      Отзывы и предложения
                    </button>
                    <button class="subject-btn">Вопрос по контенту</button>
                    <button class="subject-btn">Жалоба</button>
                    <button class="subject-btn">Вопрос пресс-службе</button>
                    <button class="subject-btn">Другое</button>
                  </div>
                  <div class="textarea-wrapper">
                    <textarea placeholder="Опишите ваш вопрос"></textarea>
                  </div>
                  <div class="politics">
                    <div class="left">
                      <label class="">
                        <input class="checkbox-input" type="checkbox" />
                        {/*<span><i class="fas fa-check"></i></span>*/}
                        <span class="politics-title">
                          Даю согласие на обработку и хранение
                          <a href="#"> персональных данных</a>
                        </span>
                      </label>
                    </div>
                    <div class="right">
                      <button class="btn-send">Отправить</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * close modal form
   * */
  public closeModalFormHandler(event) {
    console.log('clickOnCloseModalForm 1');
    if (this.backgroundModalFormTagState === event.target) {
      // this.clickOnCloseModalForm.emit();
      // console.log('clickOnCloseModalForm 2');
    }
  }

  /**
   * click on close btn
   * */
  public closeModalFormButton() {
    console.log('closeModalFormHandler 3')
    this.clickOnCloseModalForm.emit();
  }

  /**
   * проверяем на заполненность
   * */
  public checkInputHandler(parent, children) {
    !children.value
      ? parent.classList.add("error")
      : parent.classList.remove("error");
  }

  /**
   * проверяем конкретно имя
   * */
  public checkInputFocusHandler(parent, children) {
    if (children.value.length > 2) {
      parent.classList.remove("error");
    }
  }

  /**
   * проверяем количество символов для телефона
   * */
  public checkTelephoneInputFocusHandler(parent, children) {
    if (children.value.length > 7) {
      parent.classList.remove("error");
    }
  }
}
