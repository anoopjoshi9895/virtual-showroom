import { Pannellum } from "@georgedrpg/pannellum-react-next";
import { useWindowSize } from "../hooks/use-window";

const Panorama = (props: { image: string }) => {
  const image = props?.image;
  const size = useWindowSize();
  return (
    <Pannellum
      width={1440}
      height={770}
      image={image}
      pitch={0}
      yaw={0}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    ></Pannellum>
  );
};

export default Panorama;
