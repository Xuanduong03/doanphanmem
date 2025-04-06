import { useState, useEffect } from "react";
import Pagination from "../../components/admin/Pagination";
import { Link } from "react-router-dom";
const Permission = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [action, setAction] = useState("");
  const [permissions, setPermissions] = useState([]);
  const roles = [
    { id: 1, title: "Admin", description: "Quản trị toàn bộ hệ thống" },
    { id: 2, title: "Editor", description: "Chỉnh sửa nội dung" },
    { id: 3, title: "Viewer", description: "Chỉ có quyền xem" },
  ];
   useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('http://localhost:3000/admin/permissions')
        const data = await response.json()
        console.log(data)
        setPermissions(data)
      }
      fetchData()
    }, [])
  const handleDelete = (id : number): void => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };
  return (
    <div className="bg-white p-6 w-full shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Danh sách nhóm quyền</h2>
      <div className="flex items-center">
       <div className="flex gap-[50px] items-center">


       </div>
       <Link to="/admin/create_permission" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition ml-auto">Thêm mới nhóm quyền</Link>
      </div>


      
      <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">STT</th>
            <th className="px-4 py-2">Tiêu đề</th>
            <th className="px-4 py-2">Mô tả ngắn</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr key={permission.id} className="text-center">
              <td className="border-t border-t-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border-t border-t-gray-300 px-4 py-2">{permission.title}</td>
              <td className="border-t border-t-gray-300 px-4 py-2">{permission.description}</td>
              <td className="border-t border-t-gray-300 px-4 py-2">
              <Link to={'/admin/update_permission'} className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mr-[5px]">
                    Sửa
                  </Link>
                  <Link to={'/admin/delete_permission'} className="inline-block px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Xóa
                  </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <Pagination />
    </div>
  );
};

export default Permission;
