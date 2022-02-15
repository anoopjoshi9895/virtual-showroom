import React, { useEffect, useState } from "react";
import Image from "next/image";
import $ from "jquery";
import HoverSVG from "../hover-svg";
import { useWindowSize } from "../hooks/use-window";

interface CustomProps {
  data: any;
  class?: string;
  noOverlay?: boolean;
  onClick: any;
  fadeOut?: boolean;
}

const ColorBannerItem: React.FunctionComponent<CustomProps> = (
  props: CustomProps
) => {
  const size = useWindowSize();
  const width = size.width;

  const p = props.data;
  // const [imageWidth, setImageWidth] = useState(width ?? 568);
  // const [imageHeight, setImageHeight] = useState(237);
  // useEffect(() => {
  //   if (width) {
  //     const wdth = width / 3;
  //     setImageWidth(wdth);
  //     setImageHeight(wdth / 2.39);
  //   }
  // }, [width]);
  return (
    <div className="slide-detail">
      <span className="d-block">
        <div>
          {/* <Image
            height={imageHeight}
            width={imageWidth}
            objectFit={"contain"}
            src={p?.image}
            className="img-fluid fade-in"
          ></Image> */}
          {/* <img src={p.leftFacingImage} className={props.fadeOut ? "img-fluid fade-out" : "img-fluid fade-in"} /> */}
          <img src={p.leftFacingImage} className={"img-fluid"} />
          <HoverSVG
            onClick={() => {
              props.onClick(p);
            }}
            name={p?.name}
            link="/details"
          ></HoverSVG>
        </div>
      </span>
    </div>
  );
};

export default ColorBannerItem;
