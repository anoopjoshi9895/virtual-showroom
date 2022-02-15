import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ICarSeries } from "../../../api-service/api-models";
import {
  getAllSeries,
  getDetailsBySeries,
} from "../../../api-service/api-service";
import DetailWraper from "../../../components/wrapers/detail-wraper";

interface SSRHomeData {
  carList: ICarSeries[];
}

const ShowroomDetails: NextPage<SSRHomeData> = ({ carList }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="outer-main">
      <DetailWraper vehicles={carList}></DetailWraper>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const carList = await getAllSeries();
  const paths = carList?.map((data) => {
    return {
      params: {
        series: data.seriesKey,
        model: data.modelCode,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const carList = await getDetailsBySeries(
    params?.series?.toString(),
    params?.model?.toString()
  );
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
        revalidate: 10,
      },
    };
  }
};

export default ShowroomDetails;
