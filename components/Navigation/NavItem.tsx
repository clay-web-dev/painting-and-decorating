import Link from "next/link";
import { DarkModeContext } from "../DarkModeContext";
import React, { useContext } from "react";

const NavItem: React.FC<{
  pageLink: string;
  handleClick: () => void;
  copy: string;
}> = (props) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  <header
    className={`w-full max-lg:shadow-lg max-lg:fixed  ${
      darkMode ? "bg-zinc-800" : "bg-white"
    }`}
    style={{ transition: "background-color 0.3s ease" }}
  />;
  return (
    <li
      className={`p-5 m-auto text-md font-bold  hover:bg-gray-200 hover:rounded-full duration-200 
      ${darkMode ? "text-white hover:text-primary" : "text-primary "}`}
    >
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
