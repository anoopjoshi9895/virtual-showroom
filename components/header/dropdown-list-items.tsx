import DropdownItem from "./dropdown-item";

const DropdownListItems = (props: {
  header: string;
  options: any[];
  onSelect: (item: any, index: number) => void;
}) => {
  const options = props?.options ?? [];
  const header = props?.header

  return (
    <>
      <div className="option-outer w-100">
        <div className="container d-flex justify-content-end">
          <div className="option-color p-3 mt-4 mr-3">
            <h6 className="font-small text-white">{header}</h6>
            <ul className="list-unstyled font-small color-listing mt-3">
              {options?.map((item: any, index) => {
                return (
                  <DropdownItem
                    onSelect={(data: any) => {
                      props?.onSelect(data, index);
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
    </>
  );
};

export default DropdownListItems;

export interface IDropdownOption {
  name: string;
  thumbnail: string;
}
