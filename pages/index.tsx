import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ICarSeries } from "../api-service/api-models";
import { getAllSeries } from "../api-service/api-service";
import ThreeSixtyView from "../components/detail/threesixtyview";
import DetailWraper from "../components/wrapers/detail-wraper";
import ShowroomWraper from "../components/wrapers/showroom-wraper";

interface SSRHomeData {
  carList: ICarSeries[];
}
const Home: NextPage<SSRHomeData> = ({ carList }) => {
  const [isZoomedIn, setZoomedIn] = useState(false);
  const [isDetailView, setIsDetailView] = useState(false);
  const router = useRouter();
  return (
    <body className={isZoomedIn ? "zoomIn" : ""}>
      <div className="outer-main">
        {!isDetailView && (
          <ShowroomWraper
            onCarSelect={(car: ICarSeries) => {
              router.push("/details/" + car.seriesKey + "/" + car.modelCode);
            }}
            onZoomClick={() => {
              setZoomedIn(!isZoomedIn);
            }}
            carList={carList}
          ></ShowroomWraper>
        )}
        {/* {isDetailView && <ThreeSixtyView></ThreeSixtyView>} */}
      </div>
    </body>
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
