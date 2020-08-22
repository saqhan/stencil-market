import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MarketSpecialistInterface} from "../../../../../../../../index";

@Component({
  tag: "s-cnt-market-specialist",
  styleUrl: "s-cnt-market-specialist.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketSpecialist implements ComponentInterface {
  /**
   * Данные для компонента Specialist
   */
  @Prop() forSpecialist: MarketSpecialistInterface[] = [];

  render() {
    return (
      <div class="specialist">
        <div class="container-fluid">
          <div class="row justify-content-end">
            <GetSpecialistFunctionalComponent
              array={this.forSpecialist}
            ></GetSpecialistFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }
}

const GetSpecialistFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <s-cnt-market-item-specialist
        forSpecialist={item}
      ></s-cnt-market-item-specialist>
    );
  });
};
