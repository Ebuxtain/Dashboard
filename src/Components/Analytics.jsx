import React from 'react';
import {
  FiCreditCard,
  FiUserCheck,
  FiBriefcase,
  FiAlertTriangle
} from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';


const Analytics = () => {
  const stats = [
    {
      icon: <FiCreditCard className="text-green-600 w-4 h-4" />,
      label: 'Total Active Cards',
      value: '26,478',
      change: '+9%',
      changeText: 'this month',
      isAlert: false,
    },
    {
      icon: <FiUserCheck className="text-purple-600 w-4 h-4" />,
      label: 'Total Personalized Cards',
      value: '15,793',
      change: '+9%',
      changeText: 'this month',
      isAlert: false,
    },
    {
      icon: <FiBriefcase className="text-sky-400 w-4 h-4" />,
      label: 'Total Revenue',
      value: '₦9.3M',
      change: '+9%',
      changeText: 'vs yesterday',
      isAlert: false,
    },
    {
      icon: <FiAlertTriangle className="text-red-500 w-4 h-4" />,
      label: 'Pending Request',
      value: '38',
      change: 'Requires attention',
      icon2: <FaExclamationCircle className="text-red-500 w-4 h-4" />,
      isAlert: true,
    },
  ];

  return (
    <div>
      {/* Analytics Header with Left Border */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Analytics</h2>
        <div className="w-full h-1 bg-gray-100 rounded-sm" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {stats.map(({ icon, label, value, change, changeText, isAlert, icon2 }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-3 rounded-lg p-3 shadow bg-white"
          >
            {/* Icon */}
            <div className={`p-2 rounded-full ${isAlert ? 'bg-red-100' : 'bg-gray-100'}`}>
              {icon}
            </div>

            {/* Label */}
            <h3 className="text-gray-600 text-sm font-medium">{label}</h3>

            {/* Value + Change */}
            <div className="flex justify-between items-center w-full text-sm">
              <span className={`font-semibold text-lg ${isAlert ? 'text-red-600' : 'text-gray-900'}`}>
                {value}
              </span>

              {isAlert ? (
                <span className="flex items-center gap-1 text-xs">
                  {icon2}
                  <span className="bg-gray-100 text-red-600 px-2 py-0.5 rounded">{change}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs">
                  <FaArrowUp className="text-green-600 w-2 h-2" />
                  <span className="bg-gray-100 text-green-600 px-2 py-0.5 rounded ">{change}</span>
                  {changeText && <span className="text-gray-500">{changeText}</span>}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
