import { useEffect, useState,useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Notification, {notifySuccess, notifyError} from "../../components/admin/Notification";
const UpdateProduct = () => {
  const [category, setCategory] = useState("");
  const [productDetail,setProductDetail] = useState([])
  const [options, setOptions] = useState([])
  const [parentId,setParentId] = useState('')
  const [imgSrc, setImgsrc] = useState('')
  const editorRef = useRef(null)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    featured: '',
    status: ''
  });
  const showCategory = (categorys,level = 1,parent_id) => {
    let option = []
    if(Array.isArray(categorys)){
      categorys.forEach((item) => {
        const prefix = Array(level + 1).join('-- ')
        option.push(<option key={item.id} value={item._id} selected = {item.id == parent_id ? true : false}>{prefix}{item.title}</option>)
        if(item.children && item.children.length > 0){
           option = option.concat(showCategory(item.children, level + 1,item.id))
        }
       })
       return option
      } 
  }
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(`http://localhost:3000/admin/products/create`)
      const data = await response.json()
      setCategory(data)
    }
    fetchData()
   }, [])
  useEffect(() => {
    const result = showCategory(category, 1,productDetail._id)
    setOptions(result)
 }, [category])
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(`http://localhost:3000/admin/products/detail/${id}`)
      const data = await response.json()
      setProductDetail(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if(productDetail){
        setParentId(productDetail.product_category_id)
      setFormData({
        status: productDetail.status,
        featured: productDetail.featured || '0'
      })
    }
  },[productDetail])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = URL.createObjectURL(event.target.files[0])
    setImgsrc(url)
}

 const handleSubmit = async(event: React.FormEvent) => {
  event.preventDefault()
      const title = event.target.elements.title.value
      const product_category_id = event.target.elements.category.value
      let description = ''
      if(editorRef.current){
        description = editorRef.current.getContent()
      }
      const featured = formData.featured
      const price = event.target.elements.price.value
      const discountPercentage = event.target.elements.discountPercentage.value
      const stock = event.target.elements.stock.value
      const thumbnail = event.target.elements.image.files[0]
      const position = event.target.elements.position.value
      const status = formData.status

      const convertFileToBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
      
          reader.onloadend = () => {
            resolve(reader.result);
          };
      
          reader.onerror = reject; // Xử lý lỗi
        });
      };
  let image = ''
   if(thumbnail){
      image = await convertFileToBase64(thumbnail)
   }
    const Data = {
      title,
      product_category_id,
      description,
      featured,
      image,
      price,
      discountPercentage,
      stock,
      position,
      status
  } 
      const fetchData = async() => {
        const response = await fetch(`http://localhost:3000/admin/products/update/${productDetail._id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Data)
        })
        const data = await response.json()
        if(data.status === 'success'){
          notifySuccess(data.message)
        }
        if(data.status === 'error') {
          notifyError(data.message)
        }
        navigate(-1)
      }
      fetchData()
 }
  return (
    <div className="p-6 bg-gray-100 w-full">
      <h2 className="text-2xl font-bold mb-6">Sửa sản phẩm</h2>

      <form className="bg-white p-6 rounded-lg shadow-md" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          {/* Tiêu đề sản phẩm */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Tiêu đề sản phẩm
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tiêu đề sản phẩm"
              defaultValue={productDetail.title ? productDetail.title : ''}
            />
          </div>

          {/* Chọn danh mục */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
              Chọn danh mục
            </label>
            <select
              id="category"
              name="category"
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>-- Chọn danh mục --</option>
              {options}
            </select>
          </div>

          {/* Mô tả sản phẩm */}
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
              Mô tả sản phẩm
              </label>
              <Editor onInit={(event, editor) => {
                  editorRef.current = editor } } initialValue={productDetail.description ? productDetail.description : ''} apiKey="l8nswen43y48eb4g7o2uz22kocn0hgdflqpe2w2at2p68f4a" init={{
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
             }}/>
          <div>
          </div>

          {/* Nổi bật */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nổi bật</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.featured === '1' ? true : false}
                  name="featured"
                  onChange={() => setFormData(prev => {
                    return { 
                      ...prev,
                      featured: '1' }
                  })}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Có</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.featured === '0' ? true : false}
                  name="featured"
                  onChange={() => setFormData(prev => {
                    return { 
                      ...prev,
                      featured: '0' }
                  })}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Không</span>
              </label>
            </div>
          </div>

          {/* Giá */}
          <div>
            <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
              Giá
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập giá sản phẩm"
              defaultValue={productDetail.price ? productDetail.price : ''}
            />
          </div>

          {/* Phần trăm giảm giá */}
          <div>
            <label htmlFor="discount" className="block text-sm font-semibold text-gray-700 mb-2">
              Phần trăm giảm giá
            </label>
            <input
              type="number"
              id="discount"
              name="discountPercentage"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập phần trăm giảm giá"
              defaultValue={productDetail.discountPercentage ? productDetail.discountPercentage : ''}
            />
          </div>

          {/* Kho */}
          <div>
            <label htmlFor="stock" className="block text-sm font-semibold text-gray-700 mb-2">
              Kho
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số lượng sản phẩm trong kho"
              defaultValue={productDetail.stock ? productDetail.stock : ''}
            />
          </div>

          {/* Ảnh */}
          <div>
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
              Ảnh sản phẩm
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <img src={imgSrc ? imgSrc : productDetail.thumbnail} alt="" className="w-[100px] h-[100px] object-contain" />
          {/* Vị trí */}
          <div>
            <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
              Vị trí
            </label>
            <input
              type="number"
              id="position"
              name="position"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập vị trí sản phẩm"
              defaultValue={productDetail.position ? productDetail.position : ''}
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
                  name="status"
                  checked={formData.status === 'active' ? true : false}
                  onChange={() => setFormData(prev => {
                    return { 
                      ...prev,
                      status: 'active' }
                  })}
                  className="form-radio text-green-500"
                />
                <span className="ml-2">Hoạt động</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="inactive"
                  name="status"
                  checked={formData.status === 'inactive' ? true : false}
                  onChange={() => setFormData(prev => {
                    return { 
                      ...prev,
                      status: 'inactive' }
                  })}
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

export default UpdateProduct;
