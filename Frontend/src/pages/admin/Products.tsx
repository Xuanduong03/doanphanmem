import { useEffect, useState } from "react";
import Pagination from "../../components/admin/Pagination";
import { Link } from "react-router-dom";
import FilterButton from "../../components/admin/FilterButton";
import Notification, {notifySuccess, notifyError} from "../../components/admin/Notification";
const Products = () => {
  const [action, setAction] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectAll, setSelectAll] = useState(false)
  const [products, setProducts] = useState([]);
  const [sort,setSort] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<{id: string, position: number}[]>([])
  const handleActionChange = () => {
    const fetchData = async() => {
      const [sortKey, sortValue] = sort.split('-')
     if(action === 'change-position'){
      const response = await fetch(`http://localhost:3000/admin/products/change-multi?sortKey=${sortKey}&sortValue=${sortValue}&status=${statusFilter}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({action,selectedProduct})

      })
      const data = await response.json()
      if(data.status === 'success'){
        notifySuccess(data.message)
        setProducts(data.products)
      }
      if(data.status === 'error') {
        notifyError(data.message)
      }
      setSelectedProduct([])
     }
     if(action === 'delete-all'){
      const response = await fetch(`http://localhost:3000/admin/products/change-multi?sortKey=${sortKey}&sortValue=${sortValue}&status=${statusFilter}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({action,selectedProduct})

      })
      const data = await response.json()
      if(data.status === 'success'){
        notifySuccess(data.message)
        setProducts(data.products)
      }
      if(data.status === 'error') {
        notifyError(data.message)
      }
      setSelectedProduct([])
     }

     if(action === 'active'){
      const response = await fetch(`http://localhost:3000/admin/products/change-multi?sortKey=${sortKey}&sortValue=${sortValue}&status=${statusFilter}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({action,selectedProduct})

      })
      const data = await response.json()
      if(data.status === 'success'){
        notifySuccess(data.message)
        setProducts(data.products)
      }
      if(data.status === 'error') {
        notifyError(data.message)
      }
      setSelectedProduct([])
     }
     if(action === 'inactive'){
      const response = await fetch(`http://localhost:3000/admin/products/change-multi?sortKey=${sortKey}&sortValue=${sortValue}&status=${statusFilter}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({action,selectedProduct})

      })
      const data = await response.json()
      if(data.status === 'success'){
        notifySuccess(data.message)
        setProducts(data.products)
      }
      if(data.status === 'error') {
        notifyError(data.message)
      }
      setSelectedProduct([])
     }
    }
    fetchData()
  }
  const handlePosition = (id:string, position:number) => {
      setSelectedProduct(pre => pre.map(item => item.id === id ? {...item, position: position} : item))
  }
  const handleSelected = (event: React.ChangeEvent<HTMLInputElement>,productId: string, position: number) => {
          if(event.target.checked){
            setSelectedProduct((pre) => 
              [...pre, {id: productId, position: position}]
            )
          }
          else{
            setSelectedProduct(pre => pre.filter(item => item.id !== productId))
          }

          // setPosition((prev) => {
          //   return [...prev,position]
          // } )
       
  }
  useEffect(() => {
   if(products.length > 0) {
    if(selectedProduct.length === products.length){
      setSelectAll(true)
    }
    else{
      setSelectAll(false)
    }
   }
  }, [selectedProduct])
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      // Chọn tất cả sản phẩm
      const allProducts = products.map(product => ({
        id: product._id,
        position: product.position,
      }));
      setSelectedProduct(allProducts);
    } else {
      // Bỏ chọn tất cả sản phẩm
      setSelectedProduct([]);
    }
    setSelectAll(event.target.checked); // Cập nhật trạng thái của checkbox "Chọn tất cả"
  };
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('http://localhost:3000/admin/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  const handleDelete = async(id : string): void => {
    if (!window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) return;
    try {
      const res = await fetch(`http://localhost:3000/admin/products/delete/${id}`, {
        method: "PATCH",
      });
  
      const result = await res.json();
        if(result.status === 'success'){
          notifySuccess(result.message)
          setProducts(result.products)
        }
        if(result.status === 'error') {
          notifyError(result.message)
        }
    } catch (err) {
      notifyError("Lỗi khi xóa sản phẩm");
    }
  };
  const handleCategorys = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
    const [sortKey, sortValue] = event.target.value.split('-')
    setSort(event.target.value)
      const fetchData = async() => {
          const response = await fetch(`http://localhost:3000/admin/products?sortKey=${sortKey}&sortValue=${sortValue}&status=${statusFilter}`)
          const data = await response.json()
          setProducts(data)
      } 
      fetchData()
  }
  const handleSelectValue = () => {
    setSelectValue('')
    const fetchData = async() => {
      const response = await fetch(`http://localhost:3000/admin/products?&status=${statusFilter}`)
      const data = await response.json()
      setProducts(data)
    }
    fetchData()

  }
  const handleChangeStatus = (productId:string,status:string) => {
    const [sortKey, sortValue] = sort.split('-')
    const fetchData = async() => {
      const response = await fetch(`http://localhost:3000/admin/products/change-status?sortKey=${sortKey}&sortValue=${sortValue}&status=${statusFilter}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({productId,status})
      })
      const data = await response.json()
      setProducts(data.products)
      if(data.status === 'success'){
        notifySuccess(data.message)
        setProducts(data.products)
      }
      if(data.status === 'error') {
        notifyError(data.message)
      }
    }
    fetchData()
  }
  return (
    <div className="bg-white p-6 w-full shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Danh sách sản phẩm</h2>
      
      <div className="flex items-center">
       <div className="flex gap-[50px] items-center">
         {/* Bộ lọc bằng nút bấm */}
        <FilterButton sort={sort} setProducts = {setProducts} setStatusFilter = {setStatusFilter}  statusFilter={statusFilter} setSelectAll = {setSelectAll} setSelectedProduct = {setSelectedProduct}/>
      {/* Chọn hành động */}
      <div className="relative mr-[50px]">
        <select
          className="mr-[5px] px-4 py-2 rounded-lg bg-white text-gray-700 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        >
          <option value="" disabled selected>---- Chọn hành động ---</option>
          <option value="active">Hoạt động</option>
          <option value="inactive">Dừng hoạt động</option>
          <option value="delete-all">Xóa tất cả</option>
          <option value="change-position">Thay đổi vị trí</option>
        </select>
        <button onClick={handleActionChange}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Áp dụng
        </button>
      </div>
       </div>
        {/* Chọn danh mục */}
      <div className="relative">
        <select
          onChange={handleCategorys}
          value={selectValue}
          className="mr-[5px] px-4 py-2 rounded-lg bg-white text-gray-700 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
        >
          <option value="" disabled selected>---- Chọn danh mục ---</option>
          <option value="position-desc">Vị trí giảm dần</option>
          <option value="position-asc">Vị trí tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="title-desc">Tiêu đề A - Z</option>
          <option value="title-asc">Tiêu đề Z - A</option>
        </select>
        <button
        onClick={handleSelectValue}
          className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Xóa
        </button>
      </div>
       <Link to="/admin/create_product" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition ml-auto">Thêm mới sản phẩm</Link>
      </div>


      
      {/* Bảng sản phẩm */}
      <div className="overflow-x-auto mt-[20px]">
        <table className="w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">
                <input type="checkbox" checked = {selectAll} onClick={handleSelectAll}/>
              </th>
              <th className="p-3">STT</th>
              <th className="p-3">Hình ảnh</th>
              <th className="p-3">Tiêu đề</th>
              <th className="p-3">Giá</th>
              <th className="p-3">Số TT</th>
              <th className="p-3">Trạng thái</th>
              <th className="p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              products && products.map((product, index) => (
                <tr key={product._id} className="text-center hover:bg-gray-50">
                  <td className="border-t border-gray-200 p-3">
                    <input type="checkbox" checked = {selectedProduct.some(item => item.id === product._id)} onChange={(event) => {handleSelected(event,product._id,product.position)}}/>
                  </td>
                  <td className="border-t border-gray-200 p-3">{index + 1}</td>
                  <td className="border-t border-gray-200 p-3">
                    <img src={product.thumbnail} alt="Sản phẩm" className="w-22 h-22 object-contain rounded inline-block" />
                  </td>
                  <td className="border-t border-gray-200 p-3">{product.title}</td>
                  <td className="border-t border-gray-200 p-3 text-blue-600 font-semibold">
                    {product.price.toLocaleString()} đ
                  </td>
                  <td className="border-t border-gray-200 p-3">
                    <input type="number" defaultValue={product.position} onChange={(e) => handlePosition(product._id,e.target.value)} className="w-16 p-1 border rounded text-center" />
                  </td>
                  <td className="border-t border-gray-200 p-3">
                    <span onClick={() => handleChangeStatus(product._id,product.status)} className={`px-3 cursor-pointer py-1 rounded-lg text-white text-sm ${product.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                      {product.status === "active" ? "Hoạt động" : "Dừng hoạt động"}
                    </span>
                  </td>
                  <td className="border-t border-gray-200 p-3 space-x-2">
                    <Link to={`/admin/detail/${product._id}`} className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                      Sửa
                    </Link>
                    <button onClick={() => handleDelete(product._id)} className="inline-block px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Pagination />
      <Notification />
    </div>
  );
};

export default Products;
