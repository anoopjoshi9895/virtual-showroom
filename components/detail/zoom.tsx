import { useState } from "react";

const Zoom = (props: {
  onClick: (directionNumber: number) => void;
  activeNumber?: number;
  onFadeOut: () => void;
}) => {
  const [activeNumber, setActiveNumber] = useState(props.activeNumber ?? 8);
  return (
    <div className="d-flex align-items-center">
      <img src="images/rotate-element/car.png" className="mr-4 car-icon" />
      <div className="rotate-element">
        {items.map((p, index) => {
          return (
            <a
              key={"rotate-item" + index}
              onClick={() => {
                props.onFadeOut();
                setActiveNumber(p.directionNumber);

                props.onClick(p.directionNumber);
              }}
              className={
                p.className +
                (activeNumber === p.directionNumber ? " active" : "")
              }
            ></a>
          );
        })}

        <a className="zoom center"></a>
      </div>
    </div>
  );
};
const items: IDirectionGetter[] = [
  {
    directionNumber: 4,
    className: "view back",
  },
  {
    directionNumber: 5,
    className: "view back-right",
  },
  {
    directionNumber: 6,
    className: "view vertical-right",
  },
  {
    directionNumber: 7,
    className: "view slide-right",
  },
  {
    directionNumber: 0,
    className: "view front",
  },
  {
    directionNumber: 1,
    className: "view front-left",
  },
  {
    directionNumber: 2,
    className: "view vertical-left",
  },
  {
    directionNumber: 3,
    className: "view back-left",
  },
];
interface IDirectionGetter {
  directionNumber: number;
  className: string;
}

export default Zoom;
