import { useState } from "react";
import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import { getFormattedAmount } from "../utils";
import FooterItem from "./footer-item";

const Footer = (props: {
  state: IConfigState;
  onClick: (currentPage: string) => void;
  onClickNext?: () => void;
  onClickPrevious?: () => void;
  nextButtonText?: string;
  price: string;
}) => {
  const trim = props?.state?.trim;
  const wheel = props?.state?.wheel;
  const upholstery = props?.state?.upholstery;
  const color = props?.state?.color;
  const price = props?.price;
  const [showFooter, setShowFooter] = useState(true);

  const data: IFooterData[] = [
    {
      key: "360",
      title: "Color",
      image: color?.thumbNail,
    },
    {
      key: "upholstery",
      title: "Upholstery",
      image: upholstery?.thumbNail,
    },
    {
      key: "wheel",
      title: "Wheel",
      image: wheel?.thumbNail,
    },
    {
      key: "trim",
      title: "Trim",
      image: trim?.thumbNail,
    },
  ];

  return (
    <div className={"position-absolute w-100 bottom-0 left-0 selected-item-block-outer" + (!showFooter ? " slide-down" : "")}>
      <div className="container position-relative">
        <a onClick={() => {
          setShowFooter(!showFooter)
        }} className="slide-arrows"></a>
        <div className="selected-item-block p-3">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <div className="d-flex text-center">
                {data
                  ?.filter((p) => p.image)
                  .map((p, index) => {
                    return (
                      <FooterItem
                        key={"item-" + index}
                        onClick={(currentPage: string) => {
                          props?.onClick(currentPage);
                        }}
                        data={p}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="col-auto">
              <div className="align-items-center d-flex">
                <div className="text-white mx-3">
                  <span className="font-xsmall text-uppercase text-white ">
                    Net Price
                  </span>
                  <div className="price">
                    {`AED ${getFormattedAmount(Number(price ?? 0))}`}
                  </div>{" "}
                </div>
                {props?.onClickPrevious && (
                  <button
                    onClick={() => {
                      props?.onClickPrevious?.();
                    }}
                    className="btn-outline-secondary ml-2 btn"
                  >
                    Previous
                  </button>
                )}
                <button className="btn-secondary ml-2 btn">Save</button>
                {props.onClickNext && (
                  <button
                    onClick={() => {
                      props?.onClickNext?.();
                    }}
                    className="btn-primary ml-2 btn"
                  >
                    {props.nextButtonText ?? "Next"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export interface IFooterData {
  key: string;
  title: string;
  image?: string;
}
