import { useState } from "react";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("active");

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h2 className="text-2xl font-bold mb-6">Tạo tài khoản mới</h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Họ tên
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Nhập họ tên"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Nhập email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="avatar">
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="role">
              Phân quyền
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Chọn quyền
              </option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="mb-4">
            <span className="text-gray-700 mb-2">Trạng thái</span>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status === "active"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="mr-2"
                />
                Hoạt động
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="mr-2"
                />
                Không hoạt động
              </label>
            </div>
          </div>

          <div className="mb-4 text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Tạo tài khoản
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
