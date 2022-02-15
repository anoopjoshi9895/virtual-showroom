import Slider from "react-slick";
import DetailBannerItem from "./detail-banner-item";
import React, { createRef, useEffect, useState } from "react";
import $ from "jquery";
import { motion, AnimatePresence } from "framer-motion";
import { ICarSeries } from "../../api-service/api-models";

const DetailSlider = (props: {
  initialSlide: number;
  gotoSlide?: number;
  vehicles: ICarSeries[];
  onChangeSlide: (currentSlide: number) => void;
  onItemClick: any;
  fadeOut: boolean;
  direction: number;
}) => {
  const arr = props.vehicles ?? [];
  const initialSlide = props.initialSlide;
  const sliderRef = React.useRef<any>(null);
  const [haveMultipleImage, setHaveMultipleImage] = useState(true);
  // useEffect(() => {
  //   if (props.vehicles.length > 1) {
  //     setHaveMultipleImage(true);
  //   } else {
  //     setHaveMultipleImage(false);
  //   }
  // }, [props.vehicles]);
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
    <div className="align-items-center detailpage-view d-flex zoomOutview">
      <Slider
        key={"detail-slider-key" + key + haveMultipleImage}
        ref={sliderRef}
        initialSlide={initialSlide}
        centerMode={haveMultipleImage}
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
                key={p.productImages?.[props.direction]}
                //   initial={{ opacity: 0, y: 200 }}
                animate={{ x: [-100, 0], opacity: [0.5, 1] }}
                transition={{
                  x: { type: "spring", stiffness: 100 },
                  default: { duration: 1 },
                }}
              >
                <DetailBannerItem
                  imageUrl={p.productImages?.[props.direction] ?? ""}
                  fadeOut={props.fadeOut}
                  onClick={props.onItemClick}
                  key={"banner item" + index}
                  data={p}
                ></DetailBannerItem>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </Slider>
    </div>
  );
};

// class DetailSlider extends React.PureComponent<any> {
//   constructor(props: any) {
//     super(props);
//   }
//   private slick: any = createRef();
//   UNSAFE_componentWillReceiveProps() {

//     this.slick.innerSlider.onWindowResized();
//   }

//   render() {
//     return (
//       <div className="align-items-center d-flex detailpage-view main-slider w-100">
//         <Slider
//           ref={this.slick}
//           initialSlide={1}
//           key={"banner-slider"}
//           centerMode={true}
//           centerPadding={"30%"}
//           infinite={false}
//           slidesToShow={1}
//           slidesToScroll={1}
//           className="detail-slider w-100"
//           afterChange={(currentSlide: any) => {
//              props.onChangeSlide(currentSlide);
//           }}
//         >
//           {(this.props as any)?.vehicles?.map((p: any, index: any) => {
//             return (
//               <DetailBannerItem
//                 key={"banner item" + index}
//                 data={p}
//               ></DetailBannerItem>
//             );
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }
export default DetailSlider;
