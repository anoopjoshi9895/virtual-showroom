import { AvailableOption } from "../../api-service/api-models";

const DropdownItem = (props: { data: any; onSelect: (data: any) => void }) => {
  const data = props?.data;
  return (
    <li className="position-relative">
      <a
        onClick={() => {
          props.onSelect(data);
        }}
        className="selected d-flex align-items-center"
      >
        <div
          className="color mr-3 position-absolute left-0"
          style={{
            backgroundImage: "url(" + data.thumbNail + ")",
          }}
        ></div>
        {data.variantName}
      </a>
    </li>
  );
};

export default DropdownItem;
