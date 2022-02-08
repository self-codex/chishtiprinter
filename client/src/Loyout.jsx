import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./_app.scss";

const Loyout = ({ children, Outlet }) => {
  return (
    <>
      <Topbar />
      <div className="app__container">
        <Sidebar />
        <div className="app__main container-md">
          {children}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Loyout;
