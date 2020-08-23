import {Component, ComponentInterface, h, Prop} from "@stencil/core";

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
  @Prop() recommendedBlock: any;

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
              {this.recommendedBlock.recommendedTitle}
            </div>
          </div>
        </div>
        <div class="no-gutters" ref={(el) => (this.carouselTag = el)}>
          {/*<GetRecommended*/}
          {/*  array={this.recommendedBlock.featuredProduct}>*/}
          {/*</GetRecommended>*/}
        </div>
      </div>
    );
  }
}

// const GetRecommended = (props) => {
//   return props.array.map((item) => {
//     return (
//       <div class="carousel-cell">
//         <s-cnt-market-item-recommended
//           getRecommended={item}>
//         </s-cnt-market-item-recommended>
//       </div>
//     )
//   })
// }
