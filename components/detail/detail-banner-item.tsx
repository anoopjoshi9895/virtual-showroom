import React, { useEffect, useState } from "react";
import HoverSVG from "../hover-svg";
import { useWindowSize } from "../hooks/use-window";
import $ from "jquery";

interface CustomProps {
  data: any;
  imageUrl: string;
  onClick: any;
}

const DetailBannerItem: React.FunctionComponent<CustomProps> = (
  props: CustomProps
) => {
  const size = useWindowSize();
  const width = size.width;

  const p = props.data;
  return (
    <div className="slide-detail">
      <span className="d-block">
        <div>
          <img src={props.imageUrl} className={"img-fluid"} />
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

export default DetailBannerItem;
