import { toTitles } from "./utils";

const HoverSVG = (props: { link: string; name: string; onClick: any }) => {
  return (
    <span className="hover" onClick={() => {
      props.onClick();
    }}>
      <div className="series-name">
        <span className="d-block">{toTitles(props.name)}</span>
      </div>
      <span

        className="detailview"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="59"
            height="59"
            rx="29.5"
            stroke="white"
          ></rect>
          <rect
            x="10"
            y="10"
            width="40"
            height="40"
            rx="20"
            fill="white"
          ></rect>
          <path
            d="M19 30C19 30 23 22 30 22C37 22 41 30 41 30C41 30 37 38 30 38C23 38 19 30 19 30Z"
            stroke="#181818"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M30 33C31.6569 33 33 31.6569 33 30C33 28.3431 31.6569 27 30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33Z"
            stroke="#181818"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
    </span>
  );
};
export default HoverSVG;
