import { ConfigDetails } from "../../api-service/api-models";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import DropdownItem from "./dropdown-item";
import SummaryItem from "./summary-item";

const Summary = (props: {
  state: IConfigState;
  data: ConfigDetails;
}) => {
  const state = props?.state ?? [];
  const data = props?.data;

  const summaryData: ISummaryData[] = [
    {
      title: "Color",
      data: state.color?.variantName,
    },
    {
      title: "Upholstery",
      data: state.upholstery?.variantName,
    },
    {
      title: "Wheel",
      data: state.wheel?.variantName,
    },
    {
      title: "Trim",
      data: state.trim?.variantName,
    },
  ];


  return (
    <>
      <div className="option-outer w-100">
        <div className="container d-flex justify-content-end">
          <div className="option-color p-3 mt-4">
            <h6 className="font-small text-white">{"Summary"}</h6>
            <h6 className="font-small text-white">{data.productTitle}</h6>
            <div className="mt-4">
              {summaryData.map((p, index) => {
                return (
                  <SummaryItem
                    key={'summary-item-' + index}
                    data={p} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;

export interface ISummaryData {
  title: string;
  data?: string;
}
