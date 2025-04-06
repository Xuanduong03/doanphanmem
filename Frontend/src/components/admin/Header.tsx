const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="border border-stone-300 outline-none rounded-md px-4 py-2 w-[300px]"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Tìm kiếm
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Đăng xuất
        </button>
      </div>
    </header>
  );
};

export default Header;
