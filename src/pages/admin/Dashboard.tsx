import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 7000 },
    { name: "May", revenue: 6000 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

     <div className="flex w-full gap-[40px]">
      <div>
         {/* Thống kê tổng quan */}
       <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { title: "Danh mục", value: 12 },
          { title: "Sản phẩm", value: 320 },
          { title: "Đơn hàng", value: 145 },
          { title: "Doanh thu", value: "$24,000" },
        ].map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
            <p className="text-xl font-bold text-blue-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Biểu đồ doanh thu */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Biểu đồ doanh thu</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
       {/* Danh sách đơn hàng gần đây */}
       <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Đơn hàng gần đây</h3>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Mã đơn</th>
              <th className="p-3 border">Khách hàng</th>
              <th className="p-3 border">Tổng tiền</th>
              <th className="p-3 border">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {["#1234", "#5678", "#9101"].map((id, index) => (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="border p-3">{id}</td>
                <td className="border p-3">Nguyễn Văn A</td>
                <td className="border p-3">$200</td>
                <td className="border p-3">
                  <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                    Hoàn thành
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>

     
    </div>
  );
};

export default Dashboard;
