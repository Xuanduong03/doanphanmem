import { useState,useEffect } from "react";
import Pagination from "../../components/admin/Pagination";
import { Link } from "react-router-dom";
const Category = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [action, setAction] = useState("");
  const [categorys, setCategorys] = useState([
    { id: 1, image: "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._SL1500_.jpg", title: "Sản phẩm A", price: 100000, order: 1, status: "active" },
    { id: 2, image: "https://m.media-amazon.com/images/I/6142PPCdOYL._SL1500_.jpg", title: "Sản phẩm B", price: 200000, order: 2, status: "inactive" },
    { id: 3, image: "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._SL1500_.jpg", title: "Sản phẩm C", price: 300000, order: 3, status: "active" },
  ]);
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('http://localhost:3000/admin/categorys')
      const data = await response.json()
      console.log(data)
      setCategorys(data)
    }
    fetchData()
  }, [])
  const handleDelete = (id : number): void => {
    setCategorys(categorys.filter((category) => category.id !== id));
  };
  return (
    <div className="bg-white p-6 w-full shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Danh mục sản phẩm</h2>
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
      {/* Chọn hành động */}
      <div className="relative mr-[50px]">
        <select
          className="mr-[5px] px-4 py-2 rounded-lg bg-white text-gray-700 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        >
          <option value="" disabled selected>---- Chọn hành động ---</option>
          <option value="activate">Hoạt động</option>
          <option value="deactivate">Dừng hoạt động</option>
          <option value="delete">Xóa tất cả</option>
          <option value="reorder">Thay đổi vị trí</option>
        </select>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Áp dụng
        </button>
      </div>
       </div>
        {/* Chọn danh mục */}
      <div className="relative">
        <select
          className="mr-[5px] px-4 py-2 rounded-lg bg-white text-gray-700 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
        >
          <option value="" disabled selected>---- Chọn danh mục ---</option>
          <option value="activate">Vị trí giảm dần</option>
          <option value="deactivate">Vị trí tăng dần</option>
          <option value="reorder">Tiêu đề A - Z</option>
          <option value="reorder">Tiêu đề Z - A</option>
        </select>
        <button
          className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Xóa
        </button>
      </div>
       <Link to="/admin/create_category" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition ml-auto">Thêm mới danh mục</Link>
      </div>


      
      {/* Bảng sản phẩm */}
      <div className="overflow-x-auto mt-[20px]">
        <table className="w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">STT</th>
              <th className="p-3">Hình ảnh</th>
              <th className="p-3">Tiêu đề</th>
              <th className="p-3">Số TT</th>
              <th className="p-3">Trạng thái</th>
              <th className="p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categorys.map((category, index) => (
              <tr key={category.id} className="text-center hover:bg-gray-50">
                <td className="border-t border-gray-200 p-3">
                  <input type="checkbox" />
                </td>
                <td className="border-t border-gray-200 p-3">{index + 1}</td>
                <td className="border-t border-gray-200 p-3">
                  <img src={category.thumbnail} alt="Sản phẩm" className="w-22 h-22 object-contain rounded inline-block" />
                </td>
                <td className="border-t border-gray-200 p-3">{category.title}</td>
                <td className="border-t border-gray-200 p-3">
                  <input type="number" defaultValue={category.position} className="w-16 p-1 border rounded text-center" />
                </td>
                <td className="border-t border-gray-200 p-3">
                  <span className={`px-3 py-1 rounded-lg text-white text-sm ${category.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                    {category.status === "active" ? "Hoạt động" : "Dừng hoạt động"}
                  </span>
                </td>
                <td className="border-t border-gray-200 p-3 space-x-2">
                  <Link to={'/admin/update_category'} className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    Sửa
                  </Link>
                  <Link to={'/admin/delete_category'} onClick={() => handleDelete(category.id)} className="inline-block px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
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

export default Category;
