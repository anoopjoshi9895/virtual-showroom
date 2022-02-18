import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ICarSeries } from "../../../api-service/api-models";
import { getDetailsBySeries } from "../../../api-service/api-service";

const DetailWraper: any = dynamic(
  import("../../../components/wrapers/detail-wraper"),
  { ssr: false }
);

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
      <div className="detailpage-outer-main showroom-container">
        <DetailWraper vehicles={carList}></DetailWraper>
      </div>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const carList = await getAllSeries();
//   const paths = carList?.map((data) => {
//     return {
//       params: {
//         series: data.seriesKey,
//         model: data.modelCode,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
export const getServerSideProps: GetStaticProps = async ({ params }) => {
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
      },
      // revalidate: 10,
    };
  }
};

export default ShowroomDetails;
