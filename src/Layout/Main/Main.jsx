import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="h-screen w-screen flex bg-[#f8f8f8]">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-4 bg-quilocoS h-screen sm:h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
