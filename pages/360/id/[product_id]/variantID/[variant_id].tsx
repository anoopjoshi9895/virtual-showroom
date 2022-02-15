import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import {
  AvailableOption,
} from "../../../../../api-service/api-models";
import { getConfigDetailsByColorCode } from "../../../../../api-service/api-service";
import CommonHeader from "../../../../../components/header/common-header";
const ThreeSixtyView: any = dynamic(
  import("../../../../../components/detail/threesixtyview"),
  { ssr: false }
);

interface SSRHomeData {
  selectedColor: AvailableOption;
}
const ThreeSixty: NextPage<SSRHomeData> = ({ selectedColor }) => {
  return (
    <div className="outer-main">
      <>
        <CommonHeader extraButtons={[{ title: "Back to colors", link: "/" }]} />
        <ThreeSixtyView images={selectedColor?.productImages ?? []} />
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
  const selectedColor = configDetails?.availableColors?.find((p, index) => {
    return p.variantID == params?.variant_id;
  });
  if (!configDetails) {
    return {
      notFound: true,
      props: {},
      revalidate: 1,
    };
  } else {
    return {
      props: {
        selectedColor,
        revalidate: 10,
      },
    };
  }
};

export default ThreeSixty;
