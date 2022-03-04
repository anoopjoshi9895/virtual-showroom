import { AvailableOption } from "../../api-service/api-models";
import { ISummaryData } from "./summary";

const SummaryItem = (props: {
  data: ISummaryData;
}) => {
  const data = props?.data;
  return (
    <>
      <h6 className="font-small text-white mb-0">{data.title}</h6>
      <ul className="font-small text-white list-unstyled font-small color-listing">
        {data.data}
      </ul>
    </>
  );
};

export default SummaryItem;
