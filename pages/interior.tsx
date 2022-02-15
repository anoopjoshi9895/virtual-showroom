import type { NextPage } from "next";
import React from "react";
import InteriorView from "../components/detail/interior-view";

const Interior: NextPage = () => {
  return (
    <body>
      <div className="outer-main">
        <InteriorView></InteriorView>
      </div>
    </body>
  );
};

export default Interior;
