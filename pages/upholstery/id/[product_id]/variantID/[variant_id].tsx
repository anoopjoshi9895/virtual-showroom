import type { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { ConfigDetails } from "../../../../../api-service/api-models";
import { getConfigDetailsByColorCode } from "../../../../../api-service/api-service";
import Footer from "../../../../../components/footer/footer";
import CommonHeader from "../../../../../components/header/common-header";
import DropdownListItems from "../../../../../components/header/dropdown-list-items";
import dynamic from "next/dynamic";
import Image from "next/image";
import UpholsteryWrapper from "../../../../../components/wrapers/upholstery-wrapper";

interface SSRHomeData {
  configDetails: ConfigDetails;
}
const Panorama: any = dynamic(import("../../../../../components/vr/panorama"), {
  ssr: false,
});
const Upholstery: NextPage<SSRHomeData> = ({ configDetails }) => {
  const upholstery = configDetails?.availableUpholstery ?? [];
  const [selectedUpholstery, setSelectedUpholstery] = useState(upholstery[0]);

  return (
    <div className="outer-main">
      <>
        {/* <UpholsteryWrapper
          data={configDetails}
          selectedItem={selectedUpholstery}
          onSelect={(item: any, index: number) => {
            setSelectedUpholstery(upholstery[index])
          }} /> */}
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
