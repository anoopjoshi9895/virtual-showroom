import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import {
  AvailableOption,
  ConfigDetails,
} from "../../../../../api-service/api-models";
import { getConfigDetailsByColorCode } from "../../../../../api-service/api-service";
import { ConfigBuilder } from "../../../../../components/config-builder";
import Footer from "../../../../../components/footer/footer";
import CommonHeader from "../../../../../components/header/common-header";
import ImagePreloader from "../../../../../components/image-preloader";
import ThreeSixtyWrapper from "../../../../../components/wrapers/threeSixtyWraper";
import TrimWrapper from "../../../../../components/wrapers/trim-wrapper";
import UpholsteryWrapper from "../../../../../components/wrapers/upholstery-wrapper";
import WheelWrapper from "../../../../../components/wrapers/wheel-wrapper";

interface SSRHomeData {
  selectedColor: AvailableOption;
  configDetails: ConfigDetails;
}
const ThreeSixty: NextPage<SSRHomeData> = ({
  selectedColor,
  configDetails,
}) => {
  const [configState, setConfigState] = useState<IConfigState>({
    currentPage: "360",
    color: selectedColor,
  });

  return (
    <div className="outer-main">
      {ConfigBuilder.builder?.[configState.currentPage as string]?.({
        data: configDetails,
        state: configState,
        onStateChange: setConfigState,
      })}
      <ImagePreloader config={configDetails}></ImagePreloader>
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
        configDetails,
      },
      //  revalidate: 10,
    };
  }
};

export default ThreeSixty;

export interface IConfigState {
  currentPage: "360" | "upholstery" | "trim" | "wheel";
  color?: AvailableOption;
  trim?: AvailableOption;
  upholstery?: AvailableOption;
  wheel?: AvailableOption;
}
