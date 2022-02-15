import { useState } from "react";

const HeaderDropdown = (props: {
  children?: any;
  showDropdownByDefault: boolean;
}) => {
  const [show, setShow] = useState(props.showDropdownByDefault ?? false);
  return (
    <>
      <svg
        onClick={() => {
          setShow(!show);
        }}
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" ml-3 cursor-pointer"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2H42V42H2V2ZM0 2C0 0.895431 0.895431 0 2 0H42C43.1046 0 44 0.895431 44 2V42C44 43.1046 43.1046 44 42 44H2C0.895431 44 0 43.1046 0 42V2ZM33 15H11V17H33V15ZM28 21H11V23H28V21ZM11 27H23V29H11V27Z"
          fill="white"
        />
      </svg>
      {show && <>{props.children}</>}
    </>
  );
};

export default HeaderDropdown;
