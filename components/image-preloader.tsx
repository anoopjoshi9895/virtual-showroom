import dynamic from "next/dynamic";
import { ConfigDetails } from "../api-service/api-models";
const Panorama: any = dynamic(import("./vr/panorama"), { ssr: false });
const ImagePreloader = (props: { config: ConfigDetails }) => {
  const config = props.config;
  let allImages = config.availableUpholstery?.map((p) => p.productImage);
  return (
    <div style={{ height: 0 }}>
      {allImages?.map((p) => {
        return <img height={0} width={0} key={"temp-loader" + p} src={p}></img>;
      })}
      <div>
        <Panorama
          image={props.config?.availableTrim?.[0]?.productImages?.[1] ?? ""}
        />
      </div>
    </div>
  );
};
export default ImagePreloader;
