import { Progress } from "react-sweet-progress";

const PercentageLoader = (props: { percentage: number }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Progress
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
          height: "200px",
        }}
        width={70}
        type="circle"
        percent={props.percentage}
      />
    </div>
  );
};

export default PercentageLoader;
