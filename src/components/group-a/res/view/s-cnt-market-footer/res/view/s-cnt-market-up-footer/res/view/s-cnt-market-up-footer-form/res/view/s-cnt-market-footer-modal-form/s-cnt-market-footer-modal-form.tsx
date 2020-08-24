import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event, State,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-footer-modal-form",
  styleUrl: "s-cnt-market-footer-modal-form.css",
  shadow: false,
  scoped: true
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

  render() {
    return (
      <div>
        <div
          class={this.showModalForm ? "drawer-backdrop opened " : "drawer-backdrop"}
          onClick={(event) => this.closeModalFormHandler(event)}
          ref={(el) => (this.backgroundModalFormTagState = el)}
        ></div>
        <div
          class={this.showModalForm ? 'drawer-footer-modal opened' : 'drawer-footer-modal' }
        >
          <div class="drawer-content">
            <div class="wrapper-content">
              <div class="modal-nav">
                <button class="close-modal-form"
                  onClick={()=> this.closeModalFormButton()}
                ><i class="fas fa-times"></i></button></div>
              <div class="modal-content">
                <header>
                  <div class="title">Обратная связь</div>
                  <div class="subtitle" >Мы всегда готовы ответить на любой вопрос, а также услышать ваши отзывы и предложения по работе нашего сервиса.</div>
                </header>
                <form >
                  <div class="input-wrapper">
                    <div class="left">
                      <div class="input-parent">
                        <input type="text" placeholder="Ваше имя" />
                      </div>
                      <div class="input-parent">
                        <input type="text" placeholder="Мобильный телефон" />
                      </div>
                    </div>
                    <div class="right">
                      <div class="input-parent">
                        <input type="text" placeholder="Адрес электронной почты" />
                      </div>
                      <div class="input-parent">
                        <input type="text" placeholder="Ваш город" />
                      </div>
                    </div>
                  </div>
                  <hr class="form-hr" />
                  <div class="subject-wrapper">
                    <button class="subject-btn selected" >Отзывы и предложения</button>
                    <button class="subject-btn" >Вопрос по контенту</button>
                    <button class="subject-btn" >Жалоба</button>
                    <button class="subject-btn" >Вопрос пресс-службе</button>
                    <button class="subject-btn" >Другое</button>
                  </div>
                  <div class="textarea-wrapper">
                    <textarea  placeholder="Опишите ваш вопрос"></textarea>
                  </div>
                  <div class="politics">
                    <div class="left">
                      <label class="" >
                        <input class="checkbox-input" type="checkbox"/>
                        {/*<span><i class="fas fa-check"></i></span>*/}
                        <span class="politics-title" >Даю согласие на обработку и хранение
                          <a href="#"> персональных данных</a>
                        </span>
                      </label>
                    </div>
                    <div class="right">
                      <button class="btn-send" >Отправить</button>
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
    if (this.backgroundModalFormTagState === event.target) {
      this.clickOnCloseModalForm.emit();
    }
  }

  /**
   * click on close btn
   * */
  public closeModalFormButton() {
    this.clickOnCloseModalForm.emit();
  }

}
