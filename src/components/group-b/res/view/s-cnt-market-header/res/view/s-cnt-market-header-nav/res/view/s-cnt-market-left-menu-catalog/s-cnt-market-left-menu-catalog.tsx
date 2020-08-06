import {Component, ComponentInterface, Event, EventEmitter, h} from '@stencil/core';

@Component({
  tag: 's-cnt-market-left-menu-catalog',
  styleUrl: 's-cnt-market-left-menu-catalog.css',
  shadow: false,
  scoped:true
})
export class SCntMarketLeftMenuCatalog implements ComponentInterface {

  private leftMenuTag:any;
  // private leftMenuContentTag:any;

  @Event() closeLeftMenu:EventEmitter;

  render() {
    return (
      <div>
        <div class="drawer-backdrop opened"
          ref={(el)=> this.leftMenuTag = el }
             onClick={(event) => this.clickOnLeftMenuOverlayHandler(event)}
        ></div>
        <div class="drawer-left opened drawer-transition"
          // ref={(el) => this.leftMenuContentTag = el}
        >

          <div class="drawer-content">
            <div class="category-menu">
              <div class="category-menu-container">
                <div class="category-menu-header">
                  <button class="category-menu-close category-menu-close--sbermarket"
                    onClick={() => this.closeLeftMenuHandler()}
                  >
                    <i class="fas fa-times"></i>
                  </button>
                  <div class='category-menu-logo category-menu-logo--sbermarket' >

                  </div>
                </div>
                <div class="category-menu-content">
                  <ul class='category-menu-list'>
                    <li class="category-menu-item-placeholder" ></li>
                    <li class='category-menu-item category-menu-item--promoted'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class="category-menu-item-placeholder" ></li>
                  </ul>
                  <ul class='category-menu-list border-gray'>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                    <li class='category-menu-item'>
                      <a class='category-menu-item-link' >
                        <div class="category-menu-item-content">
                          <div class="category-menu-item-icon"></div>
                          <div class="category-menu-item-title">Скидки</div>
                        </div>
                        <div class="category-menu-item-link-pointer-container">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  /**
   * Закрытие меню слева
   * */
  public closeLeftMenuHandler(){
    this.closeLeftMenu.emit();
  }

  public clickOnLeftMenuOverlayHandler(event) {
    if (event.target === this.leftMenuTag) {
      this.closeLeftMenuHandler();
    }
  }

}
