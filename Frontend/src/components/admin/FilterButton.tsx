type Product = {
    title: string;
    product_category_id: string;  // Chứa ID của danh mục sản phẩm
    description: string;
    price: number;
    discountPercentage: number;
    stock: number;
    thumbnail: string;
    status: string;
    position: number;
    featured: string;
    deleted: boolean;
    slug: string;  // Được tạo từ title và phải duy nhất
    createdBy?: {
      account_id: string;  // ID tài khoản tạo sản phẩm
      createdAt: Date;  // Ngày tạo sản phẩm
    };
    deletedBy?: {
      account_id: string;  // ID tài khoản xóa sản phẩm (nếu có)
      deletedAt: Date | null;  // Ngày xóa sản phẩm (nếu có)
    };
    updatedBy?: Array<{
      account_id: string;  // ID tài khoản cập nhật sản phẩm
      updatedAt: Date;  // Ngày cập nhật sản phẩm
    }>;
  };
  
function FilterButton({sort,setProducts, setStatusFilter,statusFilter,setSelectAll,setSelectedProduct}: {sort:string, setProducts: (data: Array<Product>) => void, setStatusFilter: () => void, statusFilter:string, setSelectAll: () => void, selectdProduct: () => void}) {
  const [sortKey, sortValue] = sort.split('-')
  const fetchDataProduct = (status: string) => {
        setStatusFilter(status)
        setSelectAll(false)
        setSelectedProduct([])
        const fetchData = async() => {
            const response = await fetch(`http://localhost:3000/admin/products?sortKey=${sortKey}&sortValue=${sortValue}&status=${status}`)
            const data = await response.json()
            setProducts(data)
          }
          fetchData()
    }
    return ( 
        <>
        <div className="flex space-x-2">
        <button
          className={`px-5 py-2 rounded-lg transition ${
            statusFilter === "all"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => fetchDataProduct('all')}
        >
          Tất cả
        </button>
        <button
          className={`px-5 py-2 rounded-lg transition ${
            statusFilter === "active"
              ? "bg-green-600 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => fetchDataProduct('active')}
        >
          Hoạt động
        </button>
        <button
          className={`px-5 py-2 rounded-lg transition ${
            statusFilter === "inactive"
              ? "bg-red-600 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => fetchDataProduct('inactive')}
        >
          Dừng hoạt động
        </button>
      </div>
        
        </>
     );
}

export default FilterButton;