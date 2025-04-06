const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl text-gray-700">Trang không tồn tại</p>
        <p className="mt-2 text-lg text-gray-500">Oops! The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
