import Slider from "react-slick";
import DetailBannerItem from "./detail-banner-item";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { motion, AnimatePresence } from "framer-motion";

const CommonSlider = (props: {
  initialSlide: number;
  gotoSlide?: number;
  vehicles: ISliderData[];
  onChangeSlide: (currentSlide: number) => void;
  onItemClick: any;
}) => {
  const arr = props.vehicles ?? [];
  const initialSlide = props.initialSlide;
  let  sliderRef: any = React.useRef<any>();
  const [haveMultipleImage, setHaveMultipleImage] = useState(true);
  useEffect(() => {
    if (props.vehicles.length > 1) {
      setHaveMultipleImage(true);
    } else {
      setHaveMultipleImage(false);
    }
  }, [props.vehicles]);
  const [key, setKey] = useState(false);
  useEffect(() => {
    if (props.gotoSlide != null) {
      sliderRef?.current?.slickGoTo(props.gotoSlide);
    }
  }, [props.gotoSlide]);

  useEffect(() => {
    setTimeout(() => {
      if (
        $(".slick-slide.slick-active.slick-center.slick-current").width() === 0
      ) {
        setKey(!key);
      }
    }, 100);
  }, []);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "ArrowLeft") {
      const slide = props.gotoSlide ?? 0
      if (slide > 0) {
        sliderRef?.current?.slickGoTo(slide - 1)
      }
    }

    if (event.code === "ArrowRight") {
      const slide = props.gotoSlide ?? 0
      if (slide < (arr.length ?? 0)) {
        sliderRef?.current?.slickGoTo(slide + 1);
      }
    }
  };

  return (
    <div className="align-items-end detailpage-view  d-flex h-100 zoomOutview" onKeyDown={keyDownHandler}>
      {/* {haveMultipleImage && ( */}

        {/* <Slider
          ref={(slider) => (sliderRef = slider)}
          key={"detail-slider-key" + key}
          dots={false}
          draggable
          lazyLoad={'progressive'}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={true}
          pauseOnHover={false}
          className="detail-slider w-100"

          initialSlide={initialSlide}
          centerMode={true}
          afterChange={(currentSlide: any) => {
            props.onChangeSlide(currentSlide);
          }}
          // centerPadding={"30%"}
        > */}
          
      <Slider
        key={"detail-slider-key" + key}
        ref={sliderRef}
        initialSlide={initialSlide}
        centerMode={true}
        centerPadding={"30%"}
        infinite={false}
        slidesToShow={1}
        slidesToScroll={1}
        className="detail-slider w-100"
        afterChange={(currentSlide: any) => {
          props.onChangeSlide(currentSlide);
        }}
      >
        {arr?.map((p, index: any) => {
          return (
            <AnimatePresence key={"animation" + index}>
              <motion.div
                key={p.image}
                //   initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: [0.5, 1] }}
                transition={{
                  x: { type: "spring", stiffness: 100 },
                  default: { duration: 1 },
                }}
              >
                <DetailBannerItem
                  imageUrl={p.image}
                  onClick={props.onItemClick}
                  key={"banner item" + index}
                  data={p}
                ></DetailBannerItem>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </Slider>
      {/* )} */}
      {/* {arr.length == 1 && (
        <AnimatePresence>
          <motion.div
          className="h-100"
            key={arr[0].image}
            //   initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: [0.5, 1] }}
            transition={{
              x: { type: "spring", stiffness: 100 },
              default: { duration: 1 },
            }}
          >
            <div className="h-100 align-items-end d-flex  single-item"
              onClick={() => {
                props.onItemClick(arr[0]);
              }}
            >
              <DetailBannerItem
                imageUrl={arr[0].image}
                onClick={props.onItemClick}
                data={arr[0]}
              ></DetailBannerItem>
            </div>
          </motion.div>
        </AnimatePresence>
      )} */}
    </div>
  );
};
export default CommonSlider;

export interface ISliderData {
  id?: string;
  name: string;
  image: string;
  link: string;
  payload?: any;
}
