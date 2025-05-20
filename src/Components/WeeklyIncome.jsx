import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CardStatusChart from "./Cardstatuschart";

const data = [
  { day: "Mon", users: 45 },
  { day: "Tue", users: 15 },
  { day: "Wed", users: 40 },
  { day: "Thu", users: 35 },
  { day: "Fri", users: 60 },
  { day: "Sat", users: 22 },
  { day: "Sun", users: 50 },
];

const WeeklyIncome = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-10">
      {/* Income Line Chart */}
      <div className="bg-white p-4 rounded-xl shadow flex-1">
        <h2 className="text-lg font-medium text-[#05163b] mb-3">This Week's Income</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid vertical={false}/>
            <XAxis dataKey="day" fontSize={12} 
              tickLine={false}/>
            <YAxis
              domain={[0, 120]}
              ticks={[0, 20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
              fontSize={12}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Card Status Chart */}
      <div className="flex-1">
        <CardStatusChart />
      </div>
    </div>
  );
};

export default WeeklyIncome;
