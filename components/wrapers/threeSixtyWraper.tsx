import { ConfigDetails } from "../../api-service/api-models";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import ThreeSixtyView from "../detail/threesixtyview";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";

const ThreeSixtyWrapper = (props: {
  state: IConfigState;
  data: ConfigDetails;
  onStateChange: (state: IConfigState) => void;
}) => {
  const state = props.state;

  return (
    <>
      <CommonHeader
        extraButtons={[{ title: "Back to colors", link: "/" }]}
      ></CommonHeader>
      <ThreeSixtyView images={state.color?.productImages ?? []} />
      <Footer
        onClickPrevious={() => {}}
        state={props?.state}
        onClickNext={() => {
          const clone = { ...props.state };
          clone.currentPage = "upholstery";
          props.onStateChange(clone);
        }}
      />
    </>
  );
};

export default ThreeSixtyWrapper;
