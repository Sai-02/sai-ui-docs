import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="py-4 pt-8 flex items-center justify-center flex-col gap-4 ">
      <div
        className={`text-[#3E5060] font-bold ${
          location.pathname == "/installation" ? "text-[#0072E5] " : ""
        }`}
      >
        <Link to="/installation">Installation</Link>
      </div>
      <div
        className={`text-[#3E5060] font-bold ${
          location.pathname == "/skeleton" ? "text-[#0072E5]" : ""
        }`}
      >
        <Link to="/skeleton">Skeleton</Link>
      </div>
    </nav>
  );
};

export default Navbar;
