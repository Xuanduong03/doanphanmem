import { Link } from "react-router-dom";
import { FaHome, FaCog } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaHandPaper } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/admin/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/categorys" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <BiCategory />
              <span>Danh mục sản phẩm</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <AiFillProduct />
              <span>Sản phẩm</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/permission" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaHandPaper />
              <span>Nhóm quyền</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/roles" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaRegHandPaper />
              <span>Phân quyền</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/accounts" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <MdAccountCircle />
              <span>Danh sách tài khoản</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
              <FaCog />
              <span>Cài đặt</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
