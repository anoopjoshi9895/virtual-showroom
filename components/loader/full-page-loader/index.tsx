import React from "react";
import { LoaderProps } from "..";

const FullPageLoader: React.FunctionComponent<LoaderProps> = (
  props: LoaderProps
) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#09090A",
      }}
      className="Loader FullLoader"
    >
      {/* <div className="FullLoader__icon"> */}
      <img src="/images/loader.gif" alt=".."></img>
      {/* </div> */}
      {props.text && <div className="FullLoader__text">{props.text}</div>}
    </div>
  );
};

export default FullPageLoader;
