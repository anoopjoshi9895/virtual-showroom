import Link from "next/link";

const HeaderButton = (props: { link: string; name: string }) => {
  return (
    <Link href={props.link}>
      <span className="align-items-center px-4 back d-flex text-uppercase mr-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.41421 6.36396L7.77817 0L9.19239 1.41421L3.60662 6.99998H16V8.99998H4.05023L9.19239 14.1421L7.77817 15.5563L1.41421 9.19239L0 7.77818L1.41421 6.36396Z"
            fill="white"
          />
        </svg>
        &nbsp;{props.name}
      </span>
    </Link>
  );
};

export default HeaderButton;
