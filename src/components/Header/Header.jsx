import React from "react";
import search from "../../assets/search.png";
import notification from "../../assets/new.png";
import line from "../../assets/vertical.png";
import picture from "../../assets/_header.png";

const Header = () => {
  return (
    <>
      <header className="flex gap-700 ml-72 pt-5 sticky">
        <h2 className="font-bold text-lg">Overview</h2>
        <div className="flex gap-5 pt-2">
          <img src={search} alt="" className="h-4" />
          <img src={notification} alt="" className="h-4" />
          <img src={line} alt="" className="mb-5" />
          <h3 className="font-semibold text-sm">Jones Ferdinand</h3>
          <div>
            <img src={picture} alt="" className="w-6" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
