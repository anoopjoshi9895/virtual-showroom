import { ConfigDetails } from "../../api-service/api-models";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import ThreeSixtyView from "../detail/threesixtyview";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";

const BookNowWrapper = (props: {
  state: IConfigState;
  data: ConfigDetails;
  onStateChange: (state: IConfigState) => void;
}) => {
  const state = props.state;
  const data = props.data;

  return (
    <>
      <CommonHeader
        showDropdownByDefault={true}
        extraButtons={[
          { title: "Back to colors", link: "/color/" + data.productID },
        ]}
      ></CommonHeader>
      <ThreeSixtyView images={state.color?.productImages ?? []} />
      <Footer
        onClickPrevious={() => {
          const clone = { ...props.state };
          clone.currentPage = "trim";
          props.onStateChange(clone);
        }}
        state={props?.state}
        onClickNext={() => {}}
        nextButtonText={"Book now"}
        price={data.offerPrice}
      />
    </>
  );
};

export default BookNowWrapper;
