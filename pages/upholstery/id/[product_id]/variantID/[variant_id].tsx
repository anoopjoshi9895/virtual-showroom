import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import {
  ConfigDetails,
} from "../../../../../api-service/api-models";
import {
  getConfigDetailsByColorCode,
} from "../../../../../api-service/api-service";
import DetailHeader from "../../../../../components/detail/detail-header";
import SelectOption from "../../../../../components/detail/select-color";
import Footer from "../../../../../components/footer/footer";
import { getConfigStaticPaths } from "../../../../../components/utils";

interface SSRHomeData {
  configDetails: ConfigDetails;
}
const Upholstery: NextPage<SSRHomeData> = ({ configDetails }) => {

  return (
    <div className="outer-main">
      <>
        <DetailHeader onClick={(data: any, index: any) => { }} />
        <SelectOption
          type="Select Upholstery"
          onClick={(data: any, index: any) => {

          }}
          options={configDetails?.availableUpholstery ?? []}
        />
        <Footer />
      </>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return getConfigStaticPaths();
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const configDetails = await getConfigDetailsByColorCode(
    params?.product_id?.toString(),
    params?.variant_id?.toString()
  );

  if (!configDetails) {
    return {
      notFound: true,
      props: {},
      revalidate: 1,
    };
  } else {
    return {
      props: {
        configDetails,
        revalidate: 10,
      },
    };
  }
};

export default Upholstery;
