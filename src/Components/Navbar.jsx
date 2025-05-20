import React from 'react';
import { FiHome, FiBell, FiUser, FiSearch } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Left section: Logo and Title */}
      <div className="flex items-center gap-3">
        <FiHome className="h-5 w-5 text-gray-600" />
        <h1 className="text-md font-normal">Dashboard</h1>
      </div>
      {/* Center: Search bar with icon */}   
      <div className="relative w-[318px] left-1/3">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right section: Notification and Profile */}
      <div className="flex items-center gap-4 ml-4">
        <FiBell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500" />
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <FiUser className="h-5 w-5 text-gray-600" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
