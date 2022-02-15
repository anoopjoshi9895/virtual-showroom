import { useRouter } from "next/router";
import { useState } from "react";
import { ICarSeries } from "../../api-service/api-models";
import DetailSlider from "../detail/detail-slider";
import Zoom from "../detail/zoom";
import CommonHeader from "../header/common-header";

const DetailWraper = (props: { vehicles: ICarSeries[] }) => {
  const router = useRouter();

  const [vehicles, setVehicles] = useState(props?.vehicles ?? []);

  const initialSlide = vehicles?.length > 1 ? 1 : 0;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [fadeOut, setFadeOut] = useState(false);
  const onRotationClick = (direction: number) => {
    setDirectionNumber(direction);
  };

  const onChangeSlide = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  const onFadeOut = () => {
    setFadeOut(true);
  };

  const [directionNumber, setDirectionNumber] = useState(0);

  return (
    <>
      <CommonHeader></CommonHeader>
      {vehicles?.length > 0 && (
        <DetailSlider
          direction={directionNumber}
          fadeOut={fadeOut}
          onItemClick={(item: any) => {
            router.push("/color/" + item.productID?.toString());
          }}
          initialSlide={initialSlide}
          vehicles={vehicles}
          onChangeSlide={onChangeSlide}
        />
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
          <Zoom onFadeOut={onFadeOut} onClick={onRotationClick} />
        </div>
      </div>
    </>
  );
};

export default DetailWraper;
