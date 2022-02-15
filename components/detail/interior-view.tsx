import dynamic from "next/dynamic";
import React from "react";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";

const Panorama: any = dynamic(import("../vr/panorama"), { ssr: false });
const InteriorView = () => {
  return (
    <>
      <div className="interior-view">
        <CommonHeader />
        <Panorama></Panorama>
        <Footer />
      </div>
    </>
  );
};

export default InteriorView;
