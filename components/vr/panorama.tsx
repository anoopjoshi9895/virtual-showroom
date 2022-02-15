import { Pannellum } from "@georgedrpg/pannellum-react-next";
import myImage from "../../public/images/panorama.jpeg";

const Panorama = () => {
  return (
    <Pannellum
      width="100%"
      height="600px"
      image={"https://image.ibb.co/jCpmGQ/1.jpg"}
      pitch={0}
      yaw={0}
      hfov={110}
      autoLoad
    ></Pannellum>
  );
};

export default Panorama;
