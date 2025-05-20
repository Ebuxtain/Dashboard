import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const UserLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex w-full min-h-screen ">
      <div className="w-64 text-white">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <main className="flex-1 p-1 overflow-auto bg-blue-50 ">
          <Outlet />
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
