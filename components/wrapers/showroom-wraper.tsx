import React, { useRef, useState } from "react";
import { ICarSeries } from "../../api-service/api-models";
import { useOnLoadImages } from "../../hooks/use-onload-images";
import PercentageLoader from "../loader/percentage-loader";
import SeriesGrid from "../series-grid";
import ShowroomSlider from "../showroom-slider";

const ShowroomWraper = (props: {
  carList: ICarSeries[];
  onZoomClick: () => void;
  onCarSelect: (car: ICarSeries) => void;
}) => {
  const carList = props.carList;
  const [cars, setCars] = useState(carList ?? []);

  const onChangeSeries = (data: ICarSeries) => {
    const newList = carList?.filter((p, index) => {
      return p.seriesName === data.seriesName;
    });
    setCars(newList)
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { status: imagesLoaded, percentage } = useOnLoadImages(wrapperRef);

  return (
    <>
    <div className="showroom-container">
      <div className="navigations position-absolute w-100 left-0 top-0">
        <div className="container mx-auto d-flex justify-content-end p-3">
          <SeriesGrid onClick={(data: ICarSeries) => {
            onChangeSeries(data)
          }} cars={carList}></SeriesGrid>
        </div>
      </div>
      <div ref={wrapperRef}>
        <ShowroomSlider
          key={'carList' + cars}
          onItemClick={(item: ICarSeries) => {
            props.onCarSelect(item);
          }}
          onZoomClick={() => {
            props.onZoomClick();
          }}
          cars={cars}
        ></ShowroomSlider>
      </div>
      {!imagesLoaded && (
        <PercentageLoader
          width={90}
          paddingBottm={"12px"}
          paddingRight={"2px"}
          percentage={percentage + 30}
        ></PercentageLoader>
      )}
      <a
        onClick={() => {
          props.onZoomClick();
        }}
        className="zoomout"
      ></a>
      </div>
    </>
  );
};

export default ShowroomWraper;
