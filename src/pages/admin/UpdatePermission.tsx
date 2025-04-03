const UpdatePermission = () => {
    return (
      <div className="p-4 w-full mx-auto">
        <h2 className="text-xl font-bold mb-4">Sửa nhóm quyền</h2>
        <form className="space-y-4">
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
             <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
              Mô tả ngắn
            </label>
            <textarea
              id="description"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mô tả sản phẩm"
            />
          </div>
           <div className="mt-6 text-right">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Lưu nhóm quyền
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default UpdatePermission;