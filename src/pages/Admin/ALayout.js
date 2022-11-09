import React from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/SideMenu";

const ALayout = () => {
  return (
    <div className="ALayout">
      <Header />
      <div id="admin">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ALayout;
