import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ColorVariantDetails } from "../../api-service/api-models";
import {
  getAllSeries,
  getColorVariants,
  getDetailsBySeries,
} from "../../api-service/api-service";
import ColorWraper from "../../components/wrapers/color-wrapper";

interface SSRHomeData {
  details: ColorVariantDetails;
}

const ColorDetails: NextPage<SSRHomeData> = ({ details }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="outer-main">
      <ColorWraper data={details}></ColorWraper>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const carList = await getAllSeries();
  const seriesModelList = carList?.map((data) => {
    return {
      params: {
        series: data.seriesKey,
        model: data.modelCode,
      },
    };
  });

  const productPromises = seriesModelList?.map(async (data) => {
    const seriesList = await getDetailsBySeries(
      data?.params?.series?.toString(),
      data?.params?.model?.toString()
    );
    return seriesList;
  });
  let allProducts: any = [];
  await Promise.all(productPromises).then((results) => {
    results?.forEach((p) => {
      p?.forEach((q) => {
        if (q) {
          allProducts.push(q);
        }
      });
    });
  });
  const paths = allProducts?.map((data: any) => {
    return {
      params: {
        product_id: data.productID,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const details = await getColorVariants(params?.product_id?.toString());
  if (!details) {
    return {
      notFound: true,
      props: {},
      revalidate: 1,
    };
  } else {
    return {
      props: {
        details,
        revalidate: 10,
      },
    };
  }
};

export default ColorDetails;
