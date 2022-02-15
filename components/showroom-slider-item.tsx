import { ICarSeries } from "../api-service/api-models";
import HoverSVG from "./hover-svg";

const ShowroomSliderItem = (props: {
  cars: ICarSeries[];
  onZoomClick: any;
  onItemClick: any;
}) => {
  const cars = props.cars;
  const leftImages = props.cars?.filter((p, index) => {
    return index % 2 === 0;
  });
  const rightImages = props.cars?.filter((p, index) => {
    return index % 2 === 1;
  });
  return (
    <div className="slide">
      <div className="row w-100 outer-div text-center m-0">
        <div className="align-items-end col-6 d-flex column">
          <div className="container-left">
            <div className="layout">
              <span className="zoomview">
                {" "}
                <span
                  onClick={() => {
                    props.onZoomClick();
                  }}
                  className="zoom"
                ></span>
              </span>
              {leftImages?.map((p, index) => {
                return (
                  <div
                    key={"left-image-item" + index + p.name}
                    className={"side " + classMapper[index]}
                    onClick={() => {
                      props.onItemClick(p);
                    }}
                  >
                    <img src={p.leftFacingImage} />
                    {/* <img
                      src={
                        "https://sreena.oorjit.net/virtual-showroom/images/car1.png"
                      }
                    /> */}
                    <HoverSVG
                      onClick={() => {
                        props.onItemClick(p);
                      }}
                      name={p.name}
                      link={`${p.modelCode}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="align-items-end col-6 d-flex column">
          <div className="container-right">
            <div className="layout">
              <span className="zoomview">
                <span
                  onClick={() => {
                    props.onZoomClick();
                  }}
                  className="zoom"
                ></span>
              </span>
              {rightImages?.map((p, index) => {
                return (
                  <div
                    key={"right-image-item" + index + p.name}
                    className={"side " + classMapper[index]}
                  >
                    <img src={p.rightFacingImage} />
                    {/* <img
                      src={
                        "https://sreena.oorjit.net/virtual-showroom/images/car5.png"
                      }
                    /> */}
                    <HoverSVG
                      onClick={() => {
                        props.onItemClick(p);
                      }}
                      name={p.name}
                      link={`${p.modelCode}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const classMapper = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export default ShowroomSliderItem;
