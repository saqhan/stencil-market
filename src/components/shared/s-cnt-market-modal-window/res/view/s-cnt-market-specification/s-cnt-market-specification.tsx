import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {MarketGetSpecificationInterface, MarketSpecificationBlockInterface} from "../../../../../../index";

@Component({
  tag: "s-cnt-market-specification",
  styleUrl: "s-cnt-market-specification.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketSpecification implements ComponentInterface {
  /**
   * Данные для Specification
   */
  @Prop() specificationBlock: MarketSpecificationBlockInterface;

  /**
   * Данные для Specification
   */
  @Prop() getSpecification: MarketGetSpecificationInterface;

  render() {
    return (
      <div class="specification">
        <div class="container">
          <div class="row row-desc">
            <div class="col-sm-6">
              <div class="op">
                <b>
                  {this.specificationBlock.descriptionTitle}
                </b>
              </div>
              <div class="spec">
                {this.getSpecification.description}
              </div>
            </div>
            <div class="col-sm-6">
              {
                // выводитсч если есть пищевая ценность
                this.getSpecification.nutritionalValue.length > 0 ?
                  <div class="my-spec">
                    <div class="block-value">
                  <span class="value">
                    {this.specificationBlock.nutritionalValueTitle}
                  </span>&nbsp;
                      {this.specificationBlock.nutritionalOnTheValueTitle}
                    </div>
                    <div class="line-item-wrapper">
                      <NutritionalValue arr={this.getSpecification.nutritionalValue}/>
                    </div>
                  </div> :
                  ''
              }
              <div class="block-composition">
                <div class="item_1">
                  {this.specificationBlock.compositionTitle}
                </div>
                <div class="composition">
                  {this.getSpecification.composition}
                </div>
                <div class="line-composition">
                  <div class="info">
                    {this.specificationBlock.generalInformationTitle}
                  </div>
                </div>
                <div class="product-property">
                  <div class="product-property-child">
                    <div class="info-value-title">
                      <strong>
                        {this.getSpecification.BrandNameTitle}
                      </strong>
                    </div>
                    <div class="info-value brand-name">
                      <u>
                        {this.getSpecification.BrandName}
                      </u>
                    </div>
                  </div>
                </div>
                <GeneralInformation arr={this.getSpecification.generalInformation}/>
              </div>
            </div>
          </div>
          <div class="row row-radius">
            <div class="col-12">
              <div class="hideInformation">
                <u>
                  {this.specificationBlock.hideInformation}
                </u>
              </div>
            </div>
            <div class="col-12 recommendations">
              <div class="space"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов ...
 */
const NutritionalValue = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="line-item">
        <div class="nutritional-value-title">
          {item.infoTitle}
        </div>
        <div class="nutritional-value">
          {item.info}
        </div>
      </div>
    );
  })
}


/*
* компонентная функция для вывода элементов ...
 */
const GeneralInformation = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="product-property">
        <div class="product-property-child">
          <div class="info-value-title">
            <strong>
              {item.infoTitle}
            </strong>
          </div>
          <div class="info-value">
              {item.info}
          </div>
        </div>
      </div>
    );
  })
}
