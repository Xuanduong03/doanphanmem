const permissions = [
  { feature: "Danh mục sản phẩm", actions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"] },
  { feature: "Sản phẩm", actions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"] },
  { feature: "Nhóm quyền", actions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"] },
  { feature: "Phân quyền", actions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"] },
  { feature: "Tài khoản", actions: ["Xem", "Thêm mới", "Chỉnh sửa", "Xóa"] },
];

const roles = ["Quản trị viên", "Nhân viên", "Khách hàng"];

const Roles = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h2 className="text-2xl font-bold mb-6">Quản lý phân quyền</h2>
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Tính năng</th>
              {roles.map((role, index) => (
                <th key={index} className="p-3 text-center">{role}</th>
              ))}
            </tr>
          </thead>
          <tbody>
        
            {/* {permissions.map((permission, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-3 font-semibold border">{permission.feature}</td>
                {roles.map((role, roleIndex) => (
                  <td key={roleIndex} className="p-3 text-center border">
                    {permission.actions.map((action, actionIndex) => (
                      <label key={actionIndex} className="flex items-center gap-2 mb-2">
                        <input type="checkbox" className="rounded" /> {action}
                      </label>
                    ))}
                  </td>
                ))}
              </tr>
            ))} */}




            {permissions.map((permission, index) => (
                <>
                <tr className="border-t border-t-stone-200" key={index}>
                    <th>{permission.feature}</th>
                </tr>
                {permission.actions.map((action, actionIndex) => (
                        <>
                           <tr className="border-t border-t-stone-200" key={actionIndex}>
                             <td>{action}</td>
                                {
                                    roles.map((roles, rolesIndex) => (
                                        <>
                                            <td><input type="checkbox" name="" id=""/></td>
                                        </>
                                    ))
                                }
                           </tr>
                        </>
                    ))}
                </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right">
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 mt-[20px]">
             Cập nhật
            </button>
      </div>
    </div>
  );
};

export default Roles;
