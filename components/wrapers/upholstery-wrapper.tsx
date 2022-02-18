import { ConfigDetails } from "../../api-service/api-models";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import DropdownListItems, {
  IDropdownOption,
} from "../header/dropdown-list-items";
import Image from "next/image";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import { useEffect } from "react";

const UpholsteryWrapper = (props: {
  state: IConfigState;
  data: ConfigDetails;
  onStateChange: (state: IConfigState) => void;
}) => {
  const selectedItem =
    props?.state?.upholstery ?? props.data?.availableUpholstery?.[0];
  const data = props?.data;
  useEffect(() => {
    if (!props.state.upholstery) {
      const clone = { ...props.state };
      clone.upholstery = props.data?.availableUpholstery?.[0];
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
          header="Select Upholstery"
          onSelect={(data: IDropdownOption, index: any) => {
            const clone = { ...props.state };
            clone.upholstery = data.payload;
            props.onStateChange(clone);
          }}
          options={
            data?.availableUpholstery?.map((p) => {
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
      <img
        src={selectedItem?.productImage ?? ""}
        width={1440}
        height={770}
        className="fullwidthimage"
      />
      <Footer
        onClickPrevious={() => {
          const clone = { ...props.state };
          clone.currentPage = "360";
          props.onStateChange(clone);
        }}
        state={props?.state}
        onClickNext={() => {
          const clone = { ...props.state };
          clone.currentPage = "wheel";
          props.onStateChange(clone);
        }}
        price={data.offerPrice}
      />
    </>
  );
};

export default UpholsteryWrapper;
