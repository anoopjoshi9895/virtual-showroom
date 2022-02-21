import { useState } from "react";
import { ConfigDetails } from "../../api-service/api-models";
import { getFormattedAmount } from "../utils";

const KeyboardNumberItem = (props: {
  data: string;
  onClick: (data: string) => void;
}) => {
  const data = props.data;

  return (
    <div
      onClick={() => {
        props.onClick(data)
      }}
      className="col-4">
      {data}
    </div>
  );
};

export default KeyboardNumberItem;
