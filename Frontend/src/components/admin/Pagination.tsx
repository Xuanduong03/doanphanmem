const Pagination = () => {
    return (
      <div className="flex justify-center items-center space-x-2 mt-6">
        {/* Nút Trước */}
        <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          Trước
        </button>
  
        {/* Số trang */}
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white">1</button>
        <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">2</button>
        <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">3</button>
        <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">4</button>
        <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">5</button>
  
        {/* Nút Sau */}
        <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          Sau
        </button>
      </div>
    );
  };
  
  export default Pagination;
  