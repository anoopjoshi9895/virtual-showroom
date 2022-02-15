import dynamic from "next/dynamic";
import React from "react";
import DetailHeader from "./detail-header";
import Footer from "../footer/footer";

const Panorama: any = dynamic(import("../vr/panorama"), { ssr: false });
const InteriorView = () => {
  return (
    <>
      <div className="interior-view">
        <DetailHeader />
        <Panorama></Panorama>
        <Footer />
      </div>
    </>
  );
};

export default InteriorView;
