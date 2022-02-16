import type { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { ConfigDetails } from "../../../../../api-service/api-models";
import { getConfigDetailsByColorCode } from "../../../../../api-service/api-service";
import ThreeSixtyView from "../../../../../components/detail/threesixtyview";
import Footer from "../../../../../components/footer/footer";
import CommonHeader from "../../../../../components/header/common-header";
import DropdownListItems from "../../../../../components/header/dropdown-list-items";
import WheelWrapper from "../../../../../components/wrapers/wheel-wrapper";

interface SSRHomeData {
  configDetails: ConfigDetails;
}
const Wheel: NextPage<SSRHomeData> = ({ configDetails }) => {
  const wheel = configDetails?.availableWheels ?? [];
  const [selectedWheel, setSelectedWheel] = useState(wheel[0]);

  return (
    <div className="outer-main">
      <>
        {/* <WheelWrapper
          data={configDetails}
          selectedItem={selectedWheel}
          onSelect={(item: any, index: number) => {
            setSelectedWheel(wheel[index])
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

export default Wheel;
