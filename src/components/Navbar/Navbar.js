import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setShouldOpenNavbar }) => {
  const location = useLocation();
  const closeNavbar = () => {
    setShouldOpenNavbar(false);
  };
  return (
    <nav className="py-4  w-full flex items-center justify-center flex-col gap-4 ">
      <div className="flex items-center lg:hidden flex-row-reverse w-full px-4 cursor-pointer ">
        <div
          className="cursor-pointer"
          onClick={() => {
            closeNavbar();
          }}
        >
          <FontAwesomeIcon
            icon={faClose}
            style={{
              fontSize: "1.5rem",
            }}
          />
        </div>
      </div>
      <div
        className={` font-bold ${
          location.pathname == "/installation"
            ? "text-[#0072E5] "
            : "text-[#3E5060]"
        }`}
      >
        <Link to="/installation">
          <span
            className=""
            onClick={() => {
              closeNavbar();
            }}
          >
            Installation
          </span>
        </Link>
      </div>
      <div
        className={` font-bold ${
          location.pathname == "/skeleton" ? "text-[#0072E5]" : "text-[#3E5060]"
        }`}
      >
        <Link to="/skeleton">
          <span
            className=""
            onClick={() => {
              closeNavbar();
            }}
          >
            Skeleton
          </span>
        </Link>
      </div>
      <div
        className={` font-bold ${
          location.pathname == "/modal" ? "text-[#0072E5]" : "text-[#3E5060]"
        }`}
      >
        <Link to="/modal">
          <span
            className=""
            onClick={() => {
              closeNavbar();
            }}
          >
            Modal
          </span>
        </Link>
      </div>
      <div
        className={` font-bold ${
          location.pathname == "/alert" ? "text-[#0072E5]" : "text-[#3E5060]"
        }`}
      >
        <Link to="/alert">
          <span
            className=""
            onClick={() => {
              closeNavbar();
            }}
          >
            Alert
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
