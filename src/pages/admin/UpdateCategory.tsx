import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
const UpdateCategory = () => {
  const [category, setCategory] = useState("");
  const [highlighted, setHighlighted] = useState("no");
  const [status, setStatus] = useState("active");

  return (
    <div className="p-6 bg-gray-100 w-full">
      <h2 className="text-2xl font-bold mb-6">Sửa danh mục sản phẩm</h2>

      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4">
          {/* Tiêu đề sản phẩm */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Tiêu đề
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tiêu đề sản phẩm"
            />
          </div>

          {/* Chọn danh mục */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
              Chọn danh mục cha
            </label>
            <select
              id="category"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>-- Chọn danh mục cha --</option>
              <option value="electronics">Điện tử</option>
              <option value="clothing">Quần áo</option>
              <option value="accessories">Phụ kiện</option>
            </select>
          </div>

          {/* Mô tả sản phẩm */}
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
              Mô tả sản phẩm
              </label>
              <Editor apiKey="l8nswen43y48eb4g7o2uz22kocn0hgdflqpe2w2at2p68f4a" init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }}/>
          <div>
          </div>
          {/* Ảnh */}
          <div>
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
              Ảnh sản phẩm
            </label>
            <input
              type="file"
              id="image"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Vị trí */}
          <div>
            <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
              Vị trí
            </label>
            <input
              type="number"
              id="position"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập vị trí sản phẩm"
            />
          </div>

          {/* Trạng thái */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Trạng thái</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="active"
                  checked={status === "active"}
                  onChange={() => setStatus("active")}
                  className="form-radio text-green-500"
                />
                <span className="ml-2">Hoạt động</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={() => setStatus("inactive")}
                  className="form-radio text-red-500"
                />
                <span className="ml-2">Dừng hoạt động</span>
              </label>
            </div>
          </div>

          {/* Nút lưu */}
          <div className="mt-6 text-right">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Lưu sản phẩm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
