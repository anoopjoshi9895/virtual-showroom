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
}

const ColorBannerItem: React.FunctionComponent<CustomProps> = (
  props: CustomProps
) => {
  const size = useWindowSize();
  const width = size.width;

  const p = props.data;

  return (
    <div className="slide-detail">
      <span className="d-block">
        <div>
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
