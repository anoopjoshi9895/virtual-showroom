import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import {
  AvailableOption,
  ConfigDetails,
} from "../../../../../api-service/api-models";
import { getConfigDetailsByColorCode } from "../../../../../api-service/api-service";
import { ConfigBuilder } from "../../../../../components/config-builder";
import ImagePreloader from "../../../../../components/image-preloader";
import { getConfigStaticPaths } from "../../../../../components/utils";

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

export const getStaticPaths: GetStaticPaths = async () => {
  return getConfigStaticPaths();
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //export const getServerSideProps: GetStaticProps = async ({ params }) => {
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
  currentPage: "360" | "upholstery" | "trim" | "wheel" | "summary";
  color?: AvailableOption;
  trim?: AvailableOption;
  upholstery?: AvailableOption;
  wheel?: AvailableOption;
}
