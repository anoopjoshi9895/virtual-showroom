import React, { useEffect, useRef, useState } from "react";
import { ICarSeries } from "../../api-service/api-models";
import { useOnLoadImages } from "../../hooks/use-onload-images";
import CommonSlider, { ISliderData } from "../detail/common-slider";
import PercentageLoader from "../loader/percentage-loader";
import SeriesGrid from "../series-grid";
import { getSliderDataForShowroomList } from "../utils";

const NewShowroomWraper = (props: {
  carList: ICarSeries[];
  onZoomClick: (zoomIn?: boolean) => void;
  onCarSelect: (car: ICarSeries) => void;
  onAfterImageLoad: any;
}) => {
  const carList = props.carList;
  const [cars, setCars] = useState(carList ?? []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChangeSeries = (data: ICarSeries) => {
    const index = cars?.findIndex((p) => p.seriesKey === data.seriesKey) ?? 0;
    setCurrentSlide(index);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { status: imagesLoaded, percentage } = useOnLoadImages(wrapperRef);
  useEffect(() => {
    props.onAfterImageLoad(imagesLoaded);
  }, [imagesLoaded]);

  const onChangeSlide = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  return (
    <>
      <div className="detailpage-outer-main showroom-container">
        <div className="navigations position-absolute w-100 left-0 top-0">
          <div className="container mx-auto d-flex justify-content-end p-3">
            <SeriesGrid
              onClick={(data: ICarSeries) => {
                props.onZoomClick(false);
                onChangeSeries(data);
              }}
              cars={carList}
            ></SeriesGrid>
          </div>
        </div>
        {cars?.length > 0 && imagesLoaded && (
          <div className="h-100">
            <CommonSlider
              gotoSlide={currentSlide}
              onItemClick={(item: ISliderData) => {
                props.onCarSelect(item.payload);
              }}
              initialSlide={currentSlide}
              vehicles={getSliderDataForShowroomList(cars ?? [])}
              onChangeSlide={onChangeSlide}
            />
          </div>
        )}
      </div>
      <div style={{ display: "none" }} ref={wrapperRef}>
        {carList
          .filter((p, index) => index < 3)
          .map((p, index) => {
            return (
              <img key={"cat-item-" + index} src={p.leftFacingImage}></img>
            );
          })}
      </div>
      {!imagesLoaded && (
        <PercentageLoader
          width={90}
          paddingBottm={"12px"}
          paddingRight={"2px"}
          percentage={percentage + 30}
        />
      )}
      <a
        onClick={() => {
          props.onZoomClick();
        }}
        className="zoomout"
      ></a>
    </>
  );
};

export default NewShowroomWraper;
