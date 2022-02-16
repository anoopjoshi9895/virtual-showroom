import HomeIcon from "./home-icon";
import HeaderButton from "./header-button";
import StockDetails from "./stock-details";
import HeaderDropdown from "./header-dropdown";

const CommonHeader = (props: {
  children?: any;
  showDropdownByDefault?: boolean;
  extraButtons?: IExtraButtonData[];
  stockCount?: number;
}) => {
  return (
    <div className="navigations position-absolute w-100 left-0 top-0">
      <div className="container mx-auto p-3">
        <div className="row m-0">
          <div className="col-6 d-flex align-items-start">
            <HomeIcon />
            <HeaderButton link="/" name="View All Models" />
            {props.extraButtons?.map((p, index) => {
              return (
                <HeaderButton
                  key={"header-button-" + index}
                  link={p.link}
                  name={p.title}
                />
              );
            })}
          </div>

          <div className="col-6 d-flex justify-content-end">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center justify-content-end">
                {props.stockCount && (
                  <StockDetails stockCount={props.stockCount}></StockDetails>
                )}
                {props.children && (
                  <HeaderDropdown
                    showDropdownByDefault={props.showDropdownByDefault ?? false}
                  >
                    {props.children}
                  </HeaderDropdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;

export interface IExtraButtonData {
  title: string;
  link: string;
}
