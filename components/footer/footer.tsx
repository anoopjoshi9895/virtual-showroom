import { useRouter } from "next/router";
import { useCarConfiguration } from "../../context/configureContext";
import FooterItem from "./footer-item";

const Footer = (props: {}) => {
  const { selectedConfiguration } = useCarConfiguration();
  const router = useRouter();

  return (
    <div className="position-absolute w-100 bottom-0 left-0">
      <div className="container">
        <div className="selected-item-block p-3">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <div className="d-flex text-center">
                <div className="pr-4">
                  <span className="font-xsmall text-uppercase text-white ">
                    Color
                  </span>
                  <div
                    className="color mt-2 mx-auto"
                    style={{
                      backgroundImage: "url(/images/color-blue.jpeg)",
                    }}
                  ></div>
                </div>
                <FooterItem data={'Upholstery'} onClick={(data: any) => {
                  router.push("/upholstery/id/330/variantID/7237");
                }} />
                <FooterItem data={'Wheel'} onClick={(data: any) => {
                  router.push("/wheel/id/330/variantID/7237");
                }} />
                <FooterItem data={'Trim'} onClick={(data: any) => {
                  router.push("/trim/id/330/variantID/7237");
                }} />
              </div>
            </div>
            <div className="col-auto">
              <div className="align-items-center d-flex">
                <div className="text-white mx-3">
                  <span className="font-xsmall text-uppercase text-white ">
                    Net Price
                  </span>
                  <div className="price">AED 1,80,650</div>{" "}
                </div>
                <button className="btn-outline-secondary ml-2 btn">
                  Previous
                </button>
                <button className="btn-secondary ml-2 btn">Save</button>
                <button className="btn-primary ml-2 btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
