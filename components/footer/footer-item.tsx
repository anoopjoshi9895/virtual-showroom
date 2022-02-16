import { IFooterData } from "./footer";

const FooterItem = (props: { data: IFooterData }) => {
  const data = props?.data;
  return (
    <div className="pr-4">
      <span className="font-xsmall text-uppercase text-white ">
        {data.title}
      </span>
      <div className="color mt-2 mx-auto">
        <img
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            borderRadius: "50px",
          }}
          src={data.image}
        ></img>
      </div>
    </div>
  );
};

export default FooterItem;
