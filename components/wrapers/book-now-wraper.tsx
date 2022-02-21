import { ConfigDetails } from "../../api-service/api-models";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import ThreeSixtyView from "../detail/threesixtyview";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import SummaryPopup from "../summary/summary-popup";
import { useState } from "react";

const BookNowWrapper = (props: {
  state: IConfigState;
  data: ConfigDetails;
  onStateChange: (state: IConfigState) => void;
}) => {
  const state = props.state;
  const data = props.data;
  const [showSummaryPopup, setShowSummaryPopup] = useState(true);

  return (
    <>
      <CommonHeader
        showDropdownByDefault={true}
        extraButtons={[
          { title: "Back to colors", link: "/color/" + data.productID },
        ]}
      ></CommonHeader>
      <ThreeSixtyView images={state.color?.productImages ?? []} />
      {showSummaryPopup && (
        <SummaryPopup
          showPopup={(show: boolean) => {
            setShowSummaryPopup(show);
            const clone = { ...props.state };
            clone.currentPage = "summary";
            props.onStateChange(clone);
          }}
          data={data}
        />
      )}

      <Footer
        onClick={(currentPage: any) => {
          const clone = { ...props.state };
          clone.currentPage = currentPage;
          props.onStateChange(clone);
        }}
        onClickPrevious={() => {
          const clone = { ...props.state };
          clone.currentPage = "summary";
          props.onStateChange(clone);
        }}
        state={props?.state}
        onClickNext={() => {
          setShowSummaryPopup(true);
        }}
        nextButtonText={"Book now"}
        price={data.offerPrice}
      />
    </>
  );
};

export default BookNowWrapper;
