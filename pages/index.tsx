import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ICarSeries } from "../api-service/api-models";
import { getAllSeries } from "../api-service/api-service";
import ThreeSixtyView from "../components/detail/threesixtyview";
import { reArrangeCars } from "../components/utils";
import DetailWraper from "../components/wrapers/detail-wraper";
import NewShowroomWraper from "../components/wrapers/new-showroom-wraper";
import ShowroomWraper from "../components/wrapers/showroom-wraper";
import { useOnLoadImages } from "../hooks/use-onload-images";

interface SSRHomeData {
  carList: ICarSeries[];
}
const Home: NextPage<SSRHomeData> = ({ carList }) => {
  const [isZoomedIn, setZoomedIn] = useState(false);
  const router = useRouter();
  const cars = reArrangeCars(carList) ?? [];
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={"outer-main" + (isZoomedIn ? " zoomIn" : "")}>
      <NewShowroomWraper
        onCarSelect={(car: ICarSeries) => {
          router.push("/details/" + car.seriesKey + "/" + car.modelCode);
        }}
        onZoomClick={(zoomIn?: boolean) => {
          setZoomedIn(zoomIn ?? !isZoomedIn);
        }}
        onAfterImageLoad={setImageLoaded}
        carList={cars}
      ></NewShowroomWraper>
      {/* {imageLoaded && (
        <div style={{ display: "none" }}>
          <img src="/images/digital_showroom_bg_web.jpg"></img>
          {carList.map((p, index) => {
            return (
              <img
                key={"cat-item-" + index}
                src={index % 2 === 0 ? p.leftFacingImage : p.rightFacingImage}
              ></img>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const carList = await getAllSeries();

  if (!carList) {
    return {
      notFound: true,
      props: {},
      revalidate: 1,
    };
  } else {
    return {
      props: {
        carList,
      },
      revalidate: 10,
    };
  }
};

export default Home;
function wrapperRef(wrapperRef: any): { status: any; percentage: any } {
  throw new Error("Function not implemented.");
}
