import { Progress } from "react-sweet-progress";
import SpeedometerLoader from "./speedometer-loader";

const PercentageLoader = (props: {
  percentage: number;
  width?: number;
  paddingBottm?: string;
  paddingRight?: string;
  strokeWidth?: number;
}) => {
  return <SpeedometerLoader></SpeedometerLoader>;
  // return (
  //   <div className="FullLoader">
  //     <div
  //       style={{
  //         margin: "auto",
  //         width: "50%",
  //         paddingBottom: props.paddingBottm ?? "120px",
  //         paddingRight: props.paddingRight ?? "3px",
  //       }}
  //     >
  //       <Progress
  //         style={{
  //           display: "block",
  //           marginLeft: "auto",
  //           marginRight: "auto",
  //         }}
  //         theme={{
  //           success: {
  //             trailColor: "lightblue",
  //             color: "#2c66ab",
  //           },
  //         }}
  //         width={props.width}
  //         strokeWidth={props.strokeWidth ?? 5}
  //         type="circle"
  //         strokeColor={"red"}
  //         percent={props.percentage}
  //       />
  //     </div>
  //   </div>
  // );
};

export default PercentageLoader;
