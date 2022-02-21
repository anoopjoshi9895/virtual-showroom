import { useState } from "react";
import { ConfigDetails } from "../../api-service/api-models";
import { getFormattedAmount } from "../utils";
import KeyboardNumberItem from "./keyboard-number-item";

const SummaryPopup = (props: {
  data: ConfigDetails;
  showPopup: (show: boolean) => void;
}) => {
  const data = props.data;
  const [phoneNumber, setPhoneNumber] = useState("");
  var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0"];

  return (
    <div className="popup-wrapper p-4">
      <div className="row">
        <div className="col-4">
          <h6 className="font-normal text-white">Summary</h6>
          <h3 className="text-white mb-3">{data.productTitle}</h3>
          <h6 className="font-normal text-white">Net Price</h6>
          <h5 className="text-white">{`AED ${getFormattedAmount(
            Number(data.offerPrice ?? 0)
          )}`}</h5>
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
              <input value={phoneNumber} type="text" className="form-control" />
            </div>
          </div>
          <div className="row text-center number text-white mt-3 px-5 font-weight-normal">
            {numericArray?.map((p, index) => {
              return (
                <KeyboardNumberItem
                  key={"number-item-" + index}
                  data={p}
                  onClick={(data: string) => {
                    setPhoneNumber(phoneNumber + data);
                  }}
                />
              );
            })}
            <div
              onClick={() => {
                setPhoneNumber(
                  phoneNumber?.substring(0, phoneNumber.length - 1) ?? ""
                );
              }}
              className="col-4"
            >
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
            <div
              onClick={() => {
                props.showPopup(false);
              }}
              className="col-12 pt-3"
            >
              <input type="Submit" value="Submit" className="btn btn-primary" />
            </div>
            <div
              onClick={() => {
                props.showPopup(false);
              }}
              className="col-12 pt-3"
            >
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
  );
};

export default SummaryPopup;
