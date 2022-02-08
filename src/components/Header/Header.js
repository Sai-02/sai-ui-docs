import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import githubIcon from "../../assets/github.png";
const Header = ({ setShouldOpenNavbar }) => {
  const openNavbar = () => {
    setShouldOpenNavbar(true);
  };
  return (
    <header className="flex flex-row  p-4 border-b shadow">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="px-2">
          <h1 className="text-[2rem] text-[#007FFF] font-semibold cursor-pointer">
            Sai-UI
          </h1>
        </div>
        <div className="px-4 flex gap-6 items-center">
          <a
            href="https://github.com/Sai-02/Sai-UI"
            className=""
            target="_blank"
          >
            <img src={githubIcon} alt="" className="w-8 h-8" />
          </a>
          <div
            className="cursor-pointer text-lg lg:hidden text-[#007FFF] flex items-center"
            onClick={() => {
              openNavbar();
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{
                fontSize: "1.5rem",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
