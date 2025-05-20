import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiBarChart2,
  FiMapPin,
  FiUsers,
  FiCreditCard,
  FiFileText,
  FiBox,
  FiLock,
  FiList,
  FiLogOut,
  FiUserCheck,
  FiClipboard,
  FiActivity,
  FiUser,
} from 'react-icons/fi';
import lappo from "../assets/images/lapoo.png";
import powered from "../assets/images/Powered.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  const links = [
    { path: "/branches", label: "Branches", icon: <FiMapPin /> },
    { path: "/analytics", label: "Analytics", icon: <FiBarChart2 /> },
    { path: "/roles", label: "Roles", icon: <FiUser /> },
    { path: "/users", label: "Users", icon: <FiUsers /> },
    { path: "/card-scheme", label: "Card Scheme", icon: <FiCreditCard /> },
    { path: "/card-profile", label: "Card Profile", icon: <FiFileText /> },
    { path: "/card-request", label: "Card Requests", icon: <FiFileText /> },
    { path: "/stock", label: "Stock", icon: <FiBox /> },
    { path: "/cards", label: "Cards", icon: <FiCreditCard /> },
    { path: "/block-unblock-card", label: "Block/Unblock Card", icon: <FiLock /> },
    { path: "/authorization-list", label: "Authorization List", icon: <FiList /> },
    { path: "/authorization-queue", label: "Authorization Queue", icon: <FiClipboard /> },
    { path: "/trail", label: "Trail", icon: <FiActivity /> },
    { path: "/account", label: "Account", icon: <FiUserCheck /> },
  ];

  return (
    <div className="h-full bg-[#002f6c] text-white p-6 flex flex-col font-normal z-50">
      {/* Logo */}
      <div className="mb-12">
        <img src={lappo} alt="Logo" className="w-36 h-auto object-contain" />
      </div>

      {/* Dashboard */}
      <ul className="mb-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 ${isActive
                ? 'bg-blue-50  text-[#002f6c] font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`
            }
          >
            <FiHome className="text-lg" />
            Dashboard
          </NavLink>
        </li>
      </ul>

      {/* Main Menu */}
      <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">Main Menu</h2>
      <ul className="flex-1 space-y-1 overflow-y-auto custom-scrollbar pr-1">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 ${isActive
                  ? 'bg-blue-50  text-[#002f6c] font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm text-white mt-8 hover:text-red-300 transition-colors duration-200"
      >
        <FiLogOut className="text-lg" />
        Logout
      </button>

      {/* Powered By */}
      <div className="relative mt-20 w-full">
        <p className="absolute top-12 left-8 transform -translate-x-1/2 text-gray-400 text-xs z-10">
          Powered by
        </p>
        <img src={powered} alt="Powered by logo" className="w-full opacity-85"/>
      </div>

    </div>
  );
};

export default Sidebar;
