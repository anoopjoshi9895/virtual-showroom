import { AvailableOption } from "../../api-service/api-models";

const FooterItem = (props: {
  data: any;
  onClick: (data: any) => void
}) => {
  const data = props?.data;
  return (
    <div onClick={() => {
      props.onClick(data)
    }} className="pr-4">
      <span className="font-xsmall text-uppercase text-white ">
        {data}
      </span>
      <div
        className="color mt-2 mx-auto"
        style={{
          backgroundImage: "url(/images/color-blue.jpeg)",
        }}
      ></div>
    </div>
  );
};

export default FooterItem;
