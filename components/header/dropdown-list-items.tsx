import DropdownItem from "./dropdown-item";

const DropdownListItems = (props: {
  header: string;
  options: IDropdownOption[];
  onSelect: (item: any, index: number) => void;
}) => {
  const options = props?.options ?? [];
  const header = props?.header;

  return (
    <>
      <div className="option-outer w-100">
        <div className="container d-flex justify-content-end">
          <div className="option-color p-3 mt-4">
            <h6 className="font-small text-white">{header}</h6>
            <ul className="list-unstyled font-small color-listing mt-3">
              {options?.map((item, index) => {
                return (
                  <DropdownItem
                    onSelect={(data: any) => {
                      props?.onSelect(item, index);
                    }}
                    key={"color-item-" + index}
                    data={item}
                    thumbNail={item.thumbnail}
                    title={item.name}
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
  payload: any;
}
