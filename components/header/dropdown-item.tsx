import { AvailableOption } from "../../api-service/api-models";
import { toTitles } from "../utils";

const DropdownItem = (props: {
  thumbNail: string;
  title: string;
  data: any;
  onSelect: (data: any) => void;
}) => {
  const data = props?.data;
  const selected = data.selected ?? false;

  return (
    <li className="position-relative">
      <a
        onClick={() => {
          props.onSelect(data);
        }}
        className={(data.selected ? "selected " : "") + "d-flex align-items-center"}
      >
        <div className="color mr-3 position-absolute left-0">
          <img
            src={props.thumbNail}
          ></img>
        </div>
        {toTitles(props.title)}
      </a>
    </li>
  );
};

export default DropdownItem;
