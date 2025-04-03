import { useState } from "react";
import { Link } from "react-router-dom";
const Accounts = () => {
    const [statusFilter, setStatusFilter] = useState("all");
    const [action, setAction] = useState("");
  const accounts = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phone: "0123456789",
      role: "Admin",
      status: "active",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@example.com",
      phone: "0987654321",
      role: "User",
      status: "inactive",
    },
    {
      id: 3,
      name: "Lê Minh C",
      email: "leminhc@example.com",
      phone: "0912345678",
      role: "Editor",
      status: "active",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h2 className="text-2xl font-bold mb-6">Danh sách tài khoản</h2>

      <div className="flex items-center">
       <div className="flex gap-[50px] items-center">
         {/* Bộ lọc bằng nút bấm */}
      <div className="flex space-x-2">
        <button
          className={`px-5 py-2 rounded-lg transition ${
            statusFilter === "all"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setStatusFilter("all")}
        >
          Tất cả
        </button>
        <button
          className={`px-5 py-2 rounded-lg transition ${
            statusFilter === "active"
              ? "bg-green-600 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setStatusFilter("active")}
        >
          Hoạt động
        </button>
        <button
          className={`px-5 py-2 rounded-lg transition ${
            statusFilter === "inactive"
              ? "bg-red-600 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setStatusFilter("inactive")}
        >
          Dừng hoạt động
        </button>
      </div>
       </div>
       <Link to="/admin/create_account" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition ml-auto">Tạo tài khoản</Link>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-[10px]">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-center">Họ tên</th>
              <th className="p-3 text-center">Email</th>
              <th className="p-3 text-center">Số điện thoại</th>
              <th className="p-3 text-center">Quyền</th>
              <th className="p-3 text-center">Trạng thái</th>
              <th className="p-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id} className="text-center hover:bg-gray-50">
                <td className="p-3">{account.name}</td>
                <td className="p-3">{account.email}</td>
                <td className="p-3">{account.phone}</td>
                <td className="p-3">{account.role}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-white text-sm ${
                      account.status === "active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {account.status === "active" ? "Hoạt động" : "Không hoạt động"}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <Link to={'/admin/update_account'} className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    Sửa
                  </Link>
                  <Link to={'/admin/delete_account'} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Xóa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
