import Slider from "react-slick";
import { ICarSeries } from "../api-service/api-models";
import ShowroomSliderItem from "./showroom-slider-item";

const ShowroomSlider = (props: {
  cars: ICarSeries[];
  onZoomClick: any;
  onItemClick: any;
}) => {
  const chunkSize = 8;
  const arr = props.cars ?? [];
  const arraySlices = arr
    .map((e, i) => {
      return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
    })
    .filter((e) => {
      return e;
    });
  return (
    <>
      {props.cars.length > 1 && (
        <Slider fade={true} cssEase={"linear"} className="main-slider">
          {arraySlices?.map((p, index) => {
            return (
              <ShowroomSliderItem
                onItemClick={(item: ICarSeries) => {
                  props.onItemClick(item);
                }}
                onZoomClick={props.onZoomClick}
                key={"showroom-slider-item" + index}
                cars={p!}
              ></ShowroomSliderItem>
            );
          })}
        </Slider>
      )}
      {props.cars.length == 1 && (
        <div style={{ marginLeft: "50%" }} className="single-item">
          <ShowroomSliderItem
            onItemClick={(item: ICarSeries) => {
              props.onItemClick(item);
            }}
            onZoomClick={props.onZoomClick}
            cars={props.cars}
          ></ShowroomSliderItem>
        </div>
      )}
    </>
  );
};

export default ShowroomSlider;
