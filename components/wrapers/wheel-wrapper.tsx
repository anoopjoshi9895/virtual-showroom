import { useEffect } from "react";
import { AvailableOption, ConfigDetails } from "../../api-service/api-models";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import ThreeSixtyView from "../detail/threesixtyview";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import DropdownListItems, {
  IDropdownOption,
} from "../header/dropdown-list-items";

const WheelWrapper = (props: {
  state: IConfigState;
  data: ConfigDetails;
  onStateChange: (state: IConfigState) => void;
}) => {
  const selectedItem = props?.state?.wheel ?? props.data?.availableWheels?.[0];
  const data = props?.data;
  useEffect(() => {
    if (!props.state.wheel) {
      const clone = { ...props.state };
      clone.wheel = props.data?.availableWheels?.[0];
      props.onStateChange(clone);
    }
  }, []);
  return (
    <>
      <CommonHeader
        showDropdownByDefault={true}
        extraButtons={[
          { title: "Back to colors", link: "/color/" + data.productID },
        ]}
      >
        <DropdownListItems
          header="Select Wheel"
          onSelect={(data: IDropdownOption, index: any) => {
            const clone = { ...props.state };
            clone.wheel = data.payload;
            props.onStateChange(clone);
          }}
          options={
            data?.availableWheels?.map((p) => {
              return {
                name: p.variantName,
                thumbnail: p.thumbNail,
                payload: p,
              };
            }) ?? []
          }
        ></DropdownListItems>
      </CommonHeader>
      {/* <ThreeSixtyView images={selectedItem?.productImages ?? []} /> */}
      <ThreeSixtyView images={props.state.color?.productImages ?? []} />
      <Footer
        state={props?.state}
        onClickNext={() => {
          const clone = { ...props.state };
          clone.currentPage = "trim";
          props.onStateChange(clone);
        }}
        onClickPrevious={() => {
          const clone = { ...props.state };
          clone.currentPage = "upholstery";
          props.onStateChange(clone);
        }}
      />
    </>
  );
};

export default WheelWrapper;
