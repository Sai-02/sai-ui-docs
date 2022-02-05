import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="py-4 pt-8 flex items-center justify-center flex-col gap-4 ">
      <div className="text-[#3E5060] font-bold">
        <Link to="/installation">Installation</Link>
      </div>
      <div className="text-[#3E5060] font-bold">
        <Link to="/skeleton">Skeleton</Link>
      </div>
    </nav>
  );
};

export default Navbar;
