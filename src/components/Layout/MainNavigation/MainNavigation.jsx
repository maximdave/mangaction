import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../../assets/image2.png";
// import dashboard from "../../../assets/dashboard.png";
// import request from "../../../assets/request.jpg";

const MainNavigation = () => {
  return (
    <>
      <main className="fixed top-0 w-64">
        <section className="bg-siblack h-side-height">
          <div className="flex pt-6 pl-11">
            <img src={logo} alt="logo" className="w-8" />
            <h1 className="text-lgray font-bold text-sm pl-2 pt-1">
              Providus BCM
            </h1>
          </div>
          <nav className={classes.nav}>
            <ul>
              <li className="flex justify-center items-center">
                {/* <img src={dashboard} alt="" className="h-4" /> */}
                <NavLink to="/dashboard" activeClassName={classes.active} className="text-sm font-bold">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/cards" activeClassName={classes.active} className="text-sm font-bold">
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/request" activeClassName={classes.active} className="text-sm font-bold">
                  Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" activeClassName={classes.active} className="text-sm font-bold">
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
};

export default MainNavigation;
