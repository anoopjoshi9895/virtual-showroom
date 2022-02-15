import type { GetStaticProps, NextPage } from "next";
import React from "react";
import {
  ConfigDetails,
} from "../../../../../api-service/api-models";
import {
  getConfigDetailsByColorCode,
} from "../../../../../api-service/api-service";
import Footer from "../../../../../components/footer/footer";
import CommonHeader from "../../../../../components/header/common-header";
import DropdownListItems from "../../../../../components/header/dropdown-list-items";

interface SSRHomeData {
  configDetails: ConfigDetails;
}
const Wheel: NextPage<SSRHomeData> = ({ configDetails }) => {

  return (
    <div className="outer-main">
      <>
        <CommonHeader
          showDropdownByDefault={true}>
          <DropdownListItems
            header="Select Wheel"
            onSelect={(data: any, index: any) => {
            }}
            options={configDetails?.availableWheels ?? []}
          ></DropdownListItems>
        </CommonHeader>
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

export default Wheel;
