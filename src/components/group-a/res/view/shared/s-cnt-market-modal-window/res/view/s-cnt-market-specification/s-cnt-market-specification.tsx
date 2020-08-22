import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MarketSpecificationInterface } from "./res/interface/common.interface";

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
  @Prop() getSpecification: MarketSpecificationInterface;

  /**
   * Интерфейс для Specification
   */
  @Prop() MarketSpecificationInterface: MarketSpecificationInterface[] = [];

  render() {
    return (
      <div class="specification">
        <div class="container">
          <div class="row row-desc">
            <div class="col-sm-6">
              <div class="op">
                <b>{this.getSpecification.op}</b>
              </div>
              <div class="spec">{this.getSpecification.spec}</div>
            </div>
            <div class="col-sm-6">
              <div class="my-spec">
                <div class="block-value">
                  <span class="value">{this.getSpecification.value}</span>&nbsp;
                  {this.getSpecification.weight}
                </div>
                <div class="line-item-wrapper">
                  <div class="line-item">
                    <div class="protein">{this.getSpecification.protein}</div>
                    <div class="weightProtein">
                      {this.getSpecification.weightProtein}
                    </div>
                  </div>
                  <div class="line-item">
                    <div class="fat">{this.getSpecification.fat}</div>
                    <div class="weightFat">
                      {this.getSpecification.weightFat}
                    </div>
                  </div>
                  <div class="line-item">
                    <div class="carbohydrates">
                      {this.getSpecification.carbohydrates}
                    </div>
                    <div class="weightCarbohydrates">
                      {this.getSpecification.weightCarbohydrates}
                    </div>
                  </div>
                </div>

                <div class="calories">{this.getSpecification.calories}</div>
                <div class="weightCalories">
                  {this.getSpecification.weightCalories}
                </div>
              </div>
              <div class="block-composition">
                <div class="item_1">{this.getSpecification.item_1}</div>
                <div class="composition">
                  {this.getSpecification.composition}
                </div>
                <div class="line-composition">
                  <div class="info">{this.getSpecification.info}</div>
                </div>
                <div class="line-composition">
                  <div class="brand">{this.getSpecification.brand}</div>
                  <div class="dolce">
                    <u>{this.getSpecification.dolce}</u>
                  </div>
                </div>
                <div class="line-composition">
                  <div class="manufacturer">
                    {this.getSpecification.manufacturer}
                  </div>
                  <div class="lenta">{this.getSpecification.lenta}</div>
                </div>
                <div class="line-composition">
                  <div class="country">{this.getSpecification.country}</div>
                  <div class="russia">{this.getSpecification.russia}</div>
                </div>
                <div class="line-composition">
                  <div class="storageСonditions">
                    {this.getSpecification.storageConditions}
                  </div>
                  <div class="terms">{this.getSpecification.terms}</div>
                </div>
                <div class="line-composition">
                  <div class="term">{this.getSpecification.term}</div>
                  <div class="month">{this.getSpecification.month}</div>
                </div>
                <div class="line-composition">
                  <div class="kindOfCandy">
                    {this.getSpecification.kindOfCandy}
                  </div>
                  <div class="chocolate">{this.getSpecification.chocolate}</div>
                </div>
                <div class="line-composition">
                  <div class="typeOfChocolate">
                    {this.getSpecification.typeOfChocolate}
                  </div>
                  <div class="bitter">{this.getSpecification.bitter}</div>
                </div>
                <div class="line-composition">
                  <div class="flavor">{this.getSpecification.flavor}</div>
                  <div class="walnut">{this.getSpecification.walnut}</div>
                </div>
                <div class="line-composition">
                  <div class="supplements">
                    {this.getSpecification.supplements}
                  </div>
                  <div class="hazelnut">{this.getSpecification.hazelnut}</div>
                </div>
                <div class="line-composition">
                  <div class="feature">{this.getSpecification.feature}</div>
                  <div class="glazed">{this.getSpecification.glazed}</div>
                </div>
                <div class="line-composition">
                  <div class="packaging">{this.getSpecification.packaging}</div>
                  <div class="box">{this.getSpecification.box}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-radius">
            <div class="col-12">
              <div class="hideInformation">
                <u>{this.getSpecification.hideInformation}</u>
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
