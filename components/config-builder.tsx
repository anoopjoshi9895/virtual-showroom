import { ConfigDetails } from "../api-service/api-models";
import { IConfigState } from "../pages/360/id/[product_id]/variantID/[variant_id]";
import ThreeSixtyWrapper from "./wrapers/threeSixtyWraper";
import TrimWrapper from "./wrapers/trim-wrapper";
import UpholsteryWrapper from "./wrapers/upholstery-wrapper";
import WheelWrapper from "./wrapers/wheel-wrapper";

export class ConfigBuilder {
  static builder: {
    [stage: string]: (widget: IBuilderModel) => {};
  } = {
    360: (data: IBuilderModel) => {
      return <ThreeSixtyWrapper {...data} />;
    },
    upholstery: (data: IBuilderModel) => {
      return <UpholsteryWrapper {...data} />;
    },
    wheel: (data: IBuilderModel) => {
      return <WheelWrapper {...data} />;
    },
    trim: (data: IBuilderModel) => {
      return <TrimWrapper {...data} />;
    },
  };
}

export interface IBuilderModel {
  state: IConfigState;
  data: ConfigDetails;
  onStateChange: any;
}
