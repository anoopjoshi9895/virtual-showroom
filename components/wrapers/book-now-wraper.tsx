import { ConfigDetails } from "../../api-service/api-models";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import ThreeSixtyView from "../detail/threesixtyview";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import { text } from "stream/consumers";

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
      <div className="popup-wrapper p-4">
        <div className="row">
          <div className="col-4">
            <h6 className="font-normal text-white">Summary</h6>
            <h3 className="text-white mb-3">M340i xDrive</h3>
            <h6 className="font-normal text-white">Net Price</h6>
            <h5 className="text-white">AED 204,000.00</h5>
          </div>
          <div className="col-8">
            <h6 className="font-normal text-white">
              Please Enter Your Phone Number to book the Vechicle*
            </h6>
            <div className="row">
              <div className="col-4 pr-2">
                <select name="country-code" id="" className="form-control">
                  <option>+971</option>
                  <option>+91</option>
                </select>
              </div>
              <div className="col-8 pl-0">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row text-center number text-white mt-3 px-5 font-weight-normal">
              <div className="col-4">1</div>
              <div className="col-4">2</div>
              <div className="col-4">3</div>
              <div className="col-4">4</div>
              <div className="col-4">5</div>
              <div className="col-4">6</div>
              <div className="col-4">7</div>
              <div className="col-4">8</div>
              <div className="col-4">9</div>
              <div className="col-4"></div>
              <div className="col-4">0</div>
              <div className="col-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4V4Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 9L12 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9L18 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="col-12 pt-3">
                <input
                  type="Submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
              <div className="col-12 pt-3">
                <input
                  type="Submit"
                  value="Cancel"
                  className="btn btn-outline-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        onClick={(currentPage: any) => {
          const clone = { ...props.state };
          clone.currentPage = currentPage;
          props.onStateChange(clone);
        }}
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
