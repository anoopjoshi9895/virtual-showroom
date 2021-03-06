import Link from "next/link";

const HomeIcon = () => {
  return (
    <Link href="/">
      <div className="d-block mr-4">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <g filter="url(#filter0_b_1453_22173)">
            <rect
              width="38"
              height="38"
              rx="19"
              fill="url(#paint0_linear_1453_22173)"
              fillOpacity="0.4"
            />
            <rect
              x="0.5"
              y="0.5"
              width="37"
              height="37"
              rx="18.5"
              stroke="url(#paint1_linear_1453_22173)"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.564 10.0662L27.007 15.3373L27.0402 15.3738C27.1405 15.4841 27.2942 15.6598 27.4243 15.8695C27.5484 16.0695 27.6957 16.3703 27.6957 16.7228V25.4867C27.6957 26.225 27.0982 26.8261 26.3579 26.8261H22.184C21.6299 26.8261 21.1807 26.3769 21.1807 25.8228V22.6749C21.1807 21.4715 20.2079 20.4987 19.0112 20.4987C17.8147 20.4987 16.8418 21.4715 16.8418 22.6749V25.8228C16.8418 26.3769 16.3926 26.8261 15.8385 26.8261H11.6421C10.9018 26.8261 10.3044 26.225 10.3044 25.4867V16.6204C10.3044 16.184 10.5472 15.8321 10.6855 15.6574C10.7662 15.5556 10.8453 15.4725 10.9039 15.415C10.9336 15.3858 10.959 15.3622 10.9782 15.3449C10.9878 15.3363 10.9959 15.3292 11.0022 15.3237L11.0104 15.3166L11.0134 15.314L11.0152 15.3125C11.0152 15.3125 11.0158 15.312 11.4465 15.8238L11.0158 15.312L11.0224 15.3064L17.4139 10.0677C18.2945 9.22443 19.6827 9.22377 20.564 10.0662ZM11.8779 16.3351L11.8741 16.3384C11.8674 16.3445 11.8559 16.3551 11.8412 16.3695C11.811 16.3992 11.7718 16.4406 11.7342 16.4881C11.6954 16.537 11.6676 16.5809 11.6513 16.615C11.6466 16.625 11.6437 16.6323 11.6421 16.6368V25.4867L11.6422 25.4878L11.6426 25.4883H15.504V22.6749C15.504 20.7357 17.0728 19.1609 19.0112 19.1609C20.9498 19.1609 22.5185 20.7357 22.5185 22.6749V25.4883H26.3574L26.3578 25.4878L26.3579 25.4867V16.7228C26.3579 16.725 26.3584 16.7253 26.3579 16.7228C26.3556 16.7132 26.3437 16.6652 26.2875 16.5747C26.2313 16.4842 26.1575 16.3938 26.0823 16.3092L19.6716 11.0645L19.6498 11.0431C19.2828 10.6822 18.6957 10.6825 18.3291 11.0437L18.3073 11.0652L11.8779 16.3351Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_b_1453_22173"
              x="-40"
              y="-40"
              width="118"
              height="118"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1453_22173"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1453_22173"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1453_22173"
              x1="6.84"
              y1="3.04"
              x2="34.96"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={"0.4"} />
              <stop offset="1" stopColor="white" stopOpacity={"0.2"} />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1453_22173"
              x1="1.9"
              y1="-7.57351e-07"
              x2="35.34"
              y2="35.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={"0.4"} />
              <stop offset="1" stopColor="white" stopOpacity={"0.2"} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Link>
  );
};

export default HomeIcon;
