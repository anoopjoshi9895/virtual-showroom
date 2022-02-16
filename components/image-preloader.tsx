import { ConfigDetails } from "../api-service/api-models";

const ImagePreloader = (props: { config: ConfigDetails }) => {
  const config = props.config;
  let allImages = config.availableUpholstery?.map((p) => p.productImage);
  return (
    <div>
      {allImages?.map((p) => {
        return <img height={0} width={0} key={"temp-loader" + p} src={p}></img>;
      })}
    </div>
  );
};
export default ImagePreloader;
