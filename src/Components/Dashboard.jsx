import React from "react";
import UserLayout from "./UserLayout";
import {
  FiCalendar,
  FiCreditCard,
  FiDownload,
  FiEdit,
  FiCheckCircle,
  FiChevronRight,
} from "react-icons/fi";
import Analytics from "./Analytics"
import MonthlyReport from "./MonthlyReport";
import WeeklyIncome from "./WeeklyIncome";

function Dashboard() {
  return (
    <UserLayout>
      <div className="space-y-12 font-satoshi px-4 md:px-8 lg:px-12">
        {/* Greeting Section */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-lg font-bold text-gray-800">
              Hi Nazeer, what would you like to do today?
            </h1>
            <h2 className="text-gray-500 mt-1 text-sm">Last login: 26/11/2024 14:39:58</h2>
          </div>
          <button className="flex items-center gap-1 px-4 py-2 rounded-md border border-gray-300 hover:border-blue-700 text-black transition">
            <FiCalendar className="w-5 h-5" />
            <span className="font-normal text-sm">Today, 11 Nov 2024</span>
          </button>
        </header>

        {/* Quick Access Section */}
        <section className="bg-white p-6 rounded-2xl space-y-2">
          <h2 className="text-md font-medium text-gray-700">Your Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {[
              { icon: <FiCreditCard className="w-5 h-5 text-white" />, label: "Manage a Card" },
              { icon: <FiDownload className="w-5 h-5 text-white" />, label: "Issue Instant Card" },
              { icon: <FiEdit className="w-5 h-5 text-white" />, label: "Issue Personalized Card" },
              { icon: <FiCheckCircle className="w-5 h-5 text-white" />, label: "Review Card Requests" },
            ].map(({ icon, label }, idx) => (
              <button
                key={idx}
                className="flex items-center justify-between gap-2 p-1 bg-blue-50 rounded hover:bg-blue-100 transition cursor-pointer font-normal text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#002f6c] flex items-center justify-center">
                  {icon}
                </div>
                <span className="flex-grow text-gray-900 font-normal">{label}</span>
                <FiChevronRight className="text-gray-500" />
              </button>
            ))}
          </div>
        </section>

        {/* Analytics Section */}
        <Analytics />
        {/* Other reports */}
        <MonthlyReport />
        <WeeklyIncome />
      </div>
    </UserLayout>
  );
}

export default Dashboard;
