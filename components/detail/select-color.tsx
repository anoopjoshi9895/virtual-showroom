import DropdownItem from "../header/dropdown-item";

const SelectOption = (props: {
  type: string;
  options: any[];
  onClick: (data: any, index: any) => void;
}) => {
  const options = props?.options ?? [];
  const type = props?.type
  return (
    <div className="option-outer w-100">
      <div className="container d-flex justify-content-end">
        <div className="option-color p-3 mt-4">
          <h6 className="font-small text-white">{type}</h6>

          <ul className="list-unstyled font-small color-listing mt-3">
            {options?.map((item: any, index) => {
              return (
                <DropdownItem
                  onSelect={(data: any) => {
                    props?.onClick(data, index);
                  }}
                  key={"color-item-" + index}
                  data={item}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
