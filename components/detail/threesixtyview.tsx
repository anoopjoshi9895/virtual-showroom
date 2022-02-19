import React, { useEffect, useRef, useState } from "react";
import { useOnLoadImages } from "../../hooks/use-onload-images";
import Rotation from "react-rotation";
import { Progress } from "react-sweet-progress";
import PercentageLoader from "../loader/percentage-loader";

const ThreeSixtyView = (props: { images: string[] }) => {
  const [zoom, setZoom] = useState(false);
  const images = props?.images ?? [];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { status: imagesLoaded, percentage } = useOnLoadImages(wrapperRef);
  const [showFirst, setShowFirst] = useState(true);

  return (
    <>
    <div className="align-items-end  detailpage-view showroom-container view-360 d-flex zoomOutview justify-content-center">
      <div
        ref={wrapperRef}
        className={zoom ? "zoomout-view-360 zoom" : "zoomout-view-360"}
      >
        <div
          style={{
            height: imagesLoaded ? undefined : 0,
            display: imagesLoaded ? undefined : "none",
          }}
        >
          {showFirst && (
            <Rotation
              onChange={(val: any) => {
                if (imagesLoaded && val === 36) {
                  setShowFirst(false);
                }
              }}
              key={"rotation-key-" + imagesLoaded}
              autoPlay={true}
            >
              {images?.map((p, index) => {
                return (
                  <img className="test" key={"rotation-images-" + p} src={p} />
                );
              })}
            </Rotation>
          )}
          {!showFirst && (
            <Rotation reverse={true} cycle={true} autoPlay={false}>
              {images?.map((p, index) => {
                return (
                  <img className="test" key={"rotation-images-" + p} src={p} />
                );
              })}
            </Rotation>
          )}
        </div>
      </div>
    
      {!imagesLoaded && (
        <PercentageLoader
          strokeWidth={6}
          percentage={percentage + 30}
        ></PercentageLoader>
      )}
    </div>
      <div className="position-absolute bottom-0  py-3 justify-content-center d-flex plus-minus-block">
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
    </>
  );
};

export default ThreeSixtyView;
