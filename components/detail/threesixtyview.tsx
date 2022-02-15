import React, { useEffect, useRef, useState } from "react";
import { useOnLoadImages } from "../../hooks/use-onload-images";
import Rotation from "react-rotation";

const ThreeSixtyView = (props: { images: string[] }) => {
  const [zoom, setZoom] = useState(false);
  const images = props?.images ?? [];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { status: imagesLoaded, percentage } = useOnLoadImages(wrapperRef);

  return (
    <div className="align-items-end detailpage-view view-360 d-flex zoomOutview justify-content-center">
      {!imagesLoaded && <h1>{percentage}%</h1>}

      <div
        ref={wrapperRef}
        style={{ height: imagesLoaded ? undefined : 0 }}
        className={zoom ? "zoomout-view-360 zoom" : "zoomout-view-360"}
      >
        <Rotation
          reverse={true}
          key={"rotation-key-" + imagesLoaded}
          autoPlay={true}
        >
          {images?.map((p, index) => {
            return (
              <img className="test" key={"rotation-images-" + p} src={p} />
            );
          })}
        </Rotation>
      </div>
      <div className="position-absolute bottom-0 left-0 w-100 py-3 justify-content-center d-flex">
        <button
          onClick={() => {
            setZoom(true);
          }}
          className="plus"
        ></button>
        <button
          onClick={() => {
            setZoom(false);
          }}
          className="minus"
        ></button>
      </div>
    </div>
  );
};

export default ThreeSixtyView;
