import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { ICarSeries } from "../../api-service/api-models";
import { useOnLoadImages } from "../../hooks/use-onload-images";
import CommonSlider from "../detail/common-slider";
import RotaionWheel from "../detail/rotation-wheel";
import CommonHeader from "../header/common-header";
import PercentageLoader from "../loader/percentage-loader";
import { getVehiclesSliderData } from "../utils";

const DetailWraper = (props: { vehicles: ICarSeries[] }) => {
  const router = useRouter();

  const [vehicles, setVehicles] = useState(props?.vehicles ?? []);

  const initialSlide = vehicles?.length > 1 ? 1 : 0;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const onRotationClick = (direction: number) => {
    setDirectionNumber(direction);
  };

  const onChangeSlide = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  const [directionNumber, setDirectionNumber] = useState(0);
  const allImageArray = vehicles?.map((p) => p.productImages);
  let allImages: any[] = [];
  allImageArray?.forEach((p) => {
    allImages = allImages.concat(p);
  });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { status: imagesLoaded, percentage } = useOnLoadImages(wrapperRef);

  return (
    <>
      <CommonHeader></CommonHeader>
      {imagesLoaded && (
        <div style={{ height: 0 }}>
          {allImages?.map((p, index) => {
            return (
              <img key={"image-" + index} height={0} width={0} src={p}></img>
            );
          })}
        </div>
      )}
      <div ref={wrapperRef}>
        {vehicles?.length > 0 && (
          <CommonSlider
            onItemClick={(item: any) => {
              router.push("/color/" + item.id?.toString());
            }}
            initialSlide={initialSlide}
            vehicles={getVehiclesSliderData(vehicles, directionNumber)}
            onChangeSlide={onChangeSlide}
          />
        )}
      </div>
      {!imagesLoaded && (
        <PercentageLoader percentage={percentage + 30}></PercentageLoader>
      )}
      <div className="bottom-0 left-0 position-absolute px-4 py-2 w-100">
        <div className="d-flex flex-wrap justify-content-between">
          {vehicles?.length > 0 && (
            <span className="slideCount">
              <span className="current">{currentSlide + 1} </span>{" "}
              <span className="divider mx-2"></span>{" "}
              <span className="total">{vehicles?.length ?? 0}</span>
            </span>
          )}
          <RotaionWheel onFadeOut={() => {}} onClick={onRotationClick} />
        </div>
      </div>
    </>
  );
};

export default DetailWraper;
