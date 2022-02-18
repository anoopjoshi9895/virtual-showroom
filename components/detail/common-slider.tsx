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
  const sliderRef = React.useRef<any>(null);
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

  return (
    <div className="align-items-center detailpage-view d-flex h-100 zoomOutview">
      {haveMultipleImage && (
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
      )}
      {arr.length == 1 && (
        <AnimatePresence>
          <motion.div
            key={arr[0].image}
            //   initial={{ opacity: 0, y: 200 }}
            animate={{ x: [-100, 0], opacity: [0.5, 1] }}
            transition={{
              x: { type: "spring", stiffness: 100 },
              default: { duration: 1 },
            }}
          >
            <div
              onClick={() => {
                props.onItemClick(arr[0]);
              }}
            >
              <div className="single-item">
              <DetailBannerItem
                imageUrl={arr[0].image}
                onClick={props.onItemClick}
                data={arr[0]}
              ></DetailBannerItem>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
export default CommonSlider;

export interface ISliderData {
  id?: string;
  name: string;
  image: string;
  link: string;
}
