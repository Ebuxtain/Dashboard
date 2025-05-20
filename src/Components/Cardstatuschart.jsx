import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [

  { name: "Active", value: 1931 },
  { name: "Expired", value: 266 },
  { name: "Lost", value: 80 },
  { name: "Blocked", value: 93 },
  { name: "Inactive", value: 80 },
];

const COLORS = {
  Active: "#01A4AF",
  Expired: "#FFBA24",
  Inactive: "#014DAF",
  Blocked: " #8020E7",
  Lost: " #FF4457",
};

const total = data.reduce((acc, cur) => acc + cur.value, 0);

const CardStatusChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-md font-medium text-[#05163b] mb-3">Card Status Distribution</h3>
      <div className="w-full h-64 relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-center">
          <div className="text-xl font-semibold text-[#05163b]">{total}</div>
          <div className="text-sm text-gray-500">Total Cards</div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 text-sm font-normal text-gray-700 ">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS[item.name] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CardStatusChart;
