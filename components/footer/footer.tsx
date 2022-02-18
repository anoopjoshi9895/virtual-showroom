import { IConfigState } from "../../pages/360/id/[product_id]/variantID/[variant_id]";
import { getFormattedAmount } from "../utils";
import FooterItem from "./footer-item";

const Footer = (props: {
  state: IConfigState;
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

  const data: IFooterData[] = [
    {
      title: "Color",
      image: color?.thumbNail,
    },
    {
      title: "Upholstery",
      image: upholstery?.thumbNail,
    },
    {
      title: "Wheel",
      image: wheel?.thumbNail,
    },
    {
      title: "Trim",
      image: trim?.thumbNail,
    },
  ];

  return (
    <div className="position-absolute w-100 bottom-0 left-0">
      <div className="container">
        <div className="selected-item-block p-3">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <div className="d-flex text-center">
                {data
                  ?.filter((p) => p.image)
                  .map((p, index) => {
                    return <FooterItem key={"item-" + index} data={p} />;
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
                    {`AED ${getFormattedAmount(
                      Number(price ?? 0),
                    )}`}
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
  title: string;
  image?: string;
}
