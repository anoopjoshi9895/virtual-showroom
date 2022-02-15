import React, { useState } from "react";
import { ICarSeries } from "../../api-service/api-models";
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

  return (
    <>
      <div className="navigations position-absolute w-100 left-0 top-0">
        <div className="container mx-auto d-flex justify-content-end p-3">
          <SeriesGrid onClick={(data: ICarSeries) => {
            onChangeSeries(data)
          }} cars={carList}></SeriesGrid>
        </div>
      </div>
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
      <a
        onClick={() => {
          props.onZoomClick();
        }}
        className="zoomout"
      ></a>
    </>
  );
};

export default ShowroomWraper;
