import DropdownItem from "./dropdown-item";

const DropdownListItems = (props: {
  header: string;
  options: IDropdownOption[];
  onSelect: (item: IDropdownOption, index: number) => void;
}) => {
  return (
    <>
      <div className="option-outer w-100">
        <div className="container d-flex justify-content-end">
          <div className="option-color p-3 mt-4">
            <h6 className="font-small text-white">Select Color</h6>
            <ul className="list-unstyled font-small color-listing mt-3">
              {props.options?.map((item, index) => {
                return (
                  <DropdownItem
                    onSelect={(data) => {
                      props.onSelect(item, index);
                    }}
                    key={"dropdown-item-" + index + item.name}
                    data={item}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownListItems;

export interface IDropdownOption {
  name: string;
  thumbnail: string;
}
