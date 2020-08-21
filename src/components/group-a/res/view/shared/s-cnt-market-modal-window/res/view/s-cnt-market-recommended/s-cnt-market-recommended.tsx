import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {MarketRecommendedInterface} from "./res/interface/common.interface";

@Component({
  tag: "s-cnt-market-recommended",
  styleUrl: "s-cnt-market-recommended.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketRecommended implements ComponentInterface {
  /**
   * Данные для Recommended
   */
  @Prop() getRecommended: MarketRecommendedInterface;

  /**
   *
   */
  public carouselTag: HTMLElement;

  componentDidLoad() {
    let elem = this.carouselTag;
    // @ts-ignore
    let flkty = new Flickity(elem, {
      // options
      pageDots: false,
      cellAlign: "left",
    });
  }

  render() {
    return (
      <div class="recommended products">
        <div class="row justify-content-between">
          <div class="col">
            <div class="info">
              {this.getRecommended.recommendedTitle}
            </div>
          </div>
          {/*<div class="col-2">*/}
          {/*  <div class="icons">*/}
          {/*    <div class="arrow-left">*/}
          {/*      <i class="fa fa-arrow-left arrow" aria-hidden="true"/>*/}
          {/*    </div>*/}
          {/*    <div class="arrow-right">*/}
          {/*      <i class="fa fa-arrow-right" aria-hidden="true"/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div class="no-gutters" ref={(el) => (this.carouselTag = el)}>
          <GetRecommended
            array={this.getRecommended.featuredProduct}>
          </GetRecommended>
        </div>
      </div>
    );
  }
}

const GetRecommended = (props) => {
  return props.array.map((item) => {
    return (
      <div class="carousel-cell">
        <s-cnt-market-item-recommended
          getRecommended={item}>
        </s-cnt-market-item-recommended>
      </div>
    )
  })
}
