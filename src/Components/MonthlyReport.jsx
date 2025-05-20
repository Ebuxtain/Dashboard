import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const MonthlyReport = () => {
  const chartData = [
    { name: "May", personalised: 10, instant: 50 },
    { name: "Jun", personalised: 20, instant: 50 },
    { name: "Jul", personalised: 5, instant: 25 },
    { name: "Aug", personalised: 20, instant: 60 },
    { name: "Sep", personalised: 25, instant: 55 },
    { name: "Oct", personalised: 18, instant: 80 },
    { name: "Nov", personalised: 25, instant: 75 },
    { name: "dec", personalised: 50, instant: 80 }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Chart Card */}
      <div className="flex-1 bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Monthly Insurance</h3>
        <div className="h-72 font-normal text-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap="20%" barGap={4}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name"
               tickLine={false}            
                />
              <YAxis
                ticks={[100, 80, 60, 40, 20, 0]}
                axisLine={false}
                tickLine={false}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{
                  paddingTop: 10,
                }}
              />
              <Bar
                dataKey="personalised"
                fill="#014DAF"
                name="Personalised"
                radius={[6, 6, 0, 0]}
                stackId="a"
              />
              <Bar
                dataKey="instant"
                fill="#CCE2FF"
                name="Instant"
                radius={[6, 6, 0, 0]}
                stackId="a"
              />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* Table Card */}
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-md  ">
        <h4 className="text-md font-medium text-gray-800 mb-4">Recent Card Requests</h4>
        <table className="w-full text-left border-t border-gray-200 ">
          <thead className="bg-blue-50">
            <tr className="text-sm text-gray-600">
              <th className="py-4">Branch</th>
              <th className="py-4">Card Type</th>
              <th className="py-4">Quantity</th>
              <th className="py-4">Status</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            <tr className="border-t">
              <td className="py-4">Corporate</td>
              <td className="py-4">Instant</td>
              <td className="py-4">10</td>
              <td className="py-4">
                <span className="text-green-700 border-2 border-green-300 bg-green-50 px-2 py-1 rounded-full text-xs font-sm">
                  Ready
                </span>
              </td>
              <td className="py-2 text-blue-500 cursor-pointer">View</td>
            </tr>
            <tr className="border-t">
              <td className="py-4">Corporate</td>
              <td className="py-4">Personalised</td>
              <td className="py-4">10</td>
              <td className="py-4">
                <span className="text-yellow-700 border-2 border-yellow-300 bg-yellow-50 px-2 py-1 rounded-full text-xs font-sm">
                  In Progress
                </span>
              </td>
              <td className="py-2 text-blue-500 cursor-pointer">View</td>
            </tr>
            <tr className="border-t">
              <td className="py-4">Corporate</td>
              <td className="py-4">Instant</td>
              <td className="py-4">10</td>
              <td className="py-4">
                <span className="text-blue-700 border-2 border-blue-300 bg-blue-50 px-2 py-1 rounded-full text-xs font-m">
                  Acknowledged
                </span>
              </td>
              <td className="py-2 text-blue-500 cursor-pointer text-sm">View</td>
            </tr>
            <tr className="border-t">
              <td className="py-4">Corporate</td>
              <td className="py-4">Personalised</td>
              <td className="py-4">10</td>
              <td className="py-4">
                <span className="text-gray border-2 border-gray-300 bg-gray-50 px-2 py-1 rounded-full text-xs font-sm">
                  Pending
                </span>
              </td>
              <td className="py-2 text-blue-500 cursor-pointer">View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyReport;
