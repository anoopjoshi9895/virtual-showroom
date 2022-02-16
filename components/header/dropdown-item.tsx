import { AvailableOption } from "../../api-service/api-models";

const DropdownItem = (props: {
  thumbNail: string;
  title: string;
  data: any;
  onSelect: (data: any) => void;
}) => {
  const data = props?.data;
  return (
    <li className="position-relative">
      <a
        onClick={() => {
          props.onSelect(data);
        }}
        className="selected d-flex align-items-center"
      >
        <div className="color mr-3 position-absolute left-0">
          <img
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              borderRadius: "50px",
            }}
            src={props.thumbNail}
          ></img>
        </div>
        {props.title}
      </a>
    </li>
  );
};

export default DropdownItem;
