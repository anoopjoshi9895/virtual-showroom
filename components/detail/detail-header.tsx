import HomeIcon from "../header/home-icon";
import SelectOption from "./select-color";
import HeaderButton from "../header/header-button";

const DetailHeader = (props: {
  hideColor?: boolean;
  onClick?: (data: any, index: any) => void;
}) => {
  const hideColor = props.hideColor ?? false;
  return (
    <div className="navigations position-absolute w-100 left-0 top-0">
      <div className="container mx-auto p-3">
        <div className="row m-0">
          <div className="col-6 d-flex align-items-start">
            <HomeIcon />
            <HeaderButton link="/" name="View All Models" />
            <HeaderButton link="/color/Coupe" name="Back to colors" />
          </div>

          <div className="col-6 d-flex justify-content-end">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center justify-content-end">
                <div className="carsinstock px-3 d-flex align-items-center text-white">
                  <span className="mr-2">48</span> Cars In Stock
                </div>
                {!hideColor && (
                  <>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" ml-3 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 2H42V42H2V2ZM0 2C0 0.895431 0.895431 0 2 0H42C43.1046 0 44 0.895431 44 2V42C44 43.1046 43.1046 44 42 44H2C0.895431 44 0 43.1046 0 42V2ZM33 15H11V17H33V15ZM28 21H11V23H28V21ZM11 27H23V29H11V27Z"
                        fill="white"
                      />
                    </svg>
                    {/* <div className="select-option position-absolute">
                      <ul className="list-unstyled text-white text-uppercase m-0 p-0">
                        <li className="active">
                        Color
                        </li>
                        <li>
                        Upholstery
                        </li>
                        <li>
                        Wheel
                        </li>
                        <li>
                        TRIM
                        </li>
                        <li>
                        Packages
                        </li>
                        <li>
                        Summary
                        </li>
                      </ul>
                    </div> */}
                  </>
                )}
              </div>
              {/* {!hideColor && (
                <SelectColor
                  onClick={(data: any, index: any) => {
                    props?.onClick(data, index)
                  }}
                  color={props.color ?? []} />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
