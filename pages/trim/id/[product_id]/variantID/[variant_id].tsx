import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { ConfigDetails } from "../../../../../api-service/api-models";
import { getConfigDetailsByColorCode } from "../../../../../api-service/api-service";
import Footer from "../../../../../components/footer/footer";
import CommonHeader from "../../../../../components/header/common-header";
import DropdownListItems from "../../../../../components/header/dropdown-list-items";
import TrimWrapper from "../../../../../components/wrapers/trim-wrapper";

interface SSRHomeData {
  configDetails: ConfigDetails;
}
const Panorama: any = dynamic(import("../../../../../components/vr/panorama"), {
  ssr: false,
});
const Trim: NextPage<SSRHomeData> = ({ configDetails }) => {
  const trim = configDetails?.availableTrim ?? [];
  const [selectedTrim, setSelectedTrim] = useState(trim[0]);

  return (
    <div className="outer-main">
      <>
        {/* <TrimWrapper
          data={configDetails}
          selectedItem={selectedTrim}
          onSelect={(item: any, index: number) => {
            setSelectedTrim(trim[index])
          }}/> */}
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

export default Trim;
