import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ICarSeries } from "../api-service/api-models";
import { getAllSeries } from "../api-service/api-service";
import { reArrangeCars } from "../components/utils";

interface SSRHomeData {
  carList: ICarSeries[];
}
const NewShowroomWraper: any = dynamic(
  import("../components/wrapers/new-showroom-wraper"),
  { ssr: false }
);

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
      />
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
