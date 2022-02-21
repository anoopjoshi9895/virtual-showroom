import dynamic from "next/dynamic";
import { useEffect } from "react";
import { AvailableOption, ConfigDetails } from "../../api-service/api-models";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import DropdownListItems, {
  IDropdownOption,
} from "../header/dropdown-list-items";

const Panorama: any = dynamic(import("../vr/panorama"), {
  ssr: false,
});
const TrimWrapper = (props: {
  state: IConfigState;
  data: ConfigDetails;
  onStateChange: (state: IConfigState) => void;
}) => {
  const selectedItem = props?.state?.trim ?? props.data?.availableTrim?.[0];
  const data = props?.data;
  useEffect(() => {
    if (!props.state.trim) {
      const clone = { ...props.state };
      clone.trim = props.data?.availableTrim?.[0];
      props.onStateChange(clone);
    }
  }, []);
  return (
    <div className="interior-view">
      <>
        <CommonHeader
          showDropdownByDefault={true}
          extraButtons={[
            { title: "Back to colors", link: "/color/" + data.productID },
          ]}
        >
          <DropdownListItems
            header="Select Trim"
            onSelect={(data: IDropdownOption, index: any) => {
              const clone = { ...props.state };
              clone.trim = data.payload;
              props.onStateChange(clone);
            }}
            options={
              data?.availableTrim.map((p) => {
                return {
                  name: p.variantName,
                  thumbnail: p.thumbNail,
                  payload: p,
                  selected: selectedItem.variantID == p.variantID
                };
              }) ?? []
            }
          ></DropdownListItems>
        </CommonHeader>
        <Panorama image={selectedItem?.productImages?.[1] ?? ""} />
        <Footer
          onClick={(currentPage: any) => {
            const clone = { ...props.state };
            clone.currentPage = currentPage;
            props.onStateChange(clone);
          }}
          state={props?.state}
          onClickNext={() => {
            const clone = { ...props.state };
            clone.currentPage = "summary";
            props.onStateChange(clone);
          }}
          onClickPrevious={() => {
            const clone = { ...props.state };
            clone.currentPage = "wheel";
            props.onStateChange(clone);
          }}
          price={data.offerPrice}
        />
      </>
    </div>
  );
};

export default TrimWrapper;
