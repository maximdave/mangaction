import React from "react";
import Header from "../Header/Header";
import MainNavigation from "./MainNavigation/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div className="">
        <Header className=""/>
        <MainNavigation className="" />
        <main className="">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
