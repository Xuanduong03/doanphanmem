import { CiShoppingCart } from 'react-icons/ci';
import arrow from '../../assets/arrow.svg'
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoHeart } from "react-icons/go";
function Products() {
    return ( 
        <div className="max-w-[1240px] m-auto pb-[25px]">
             <ul className='py-[15px] flex items-center gap-[10px]'>
        <li className='flex items-center gap-[10px]'>
            <a href="" className='text-[#2b2f3366] hover:text-[#f03248]'>Trang chủ</a>
            <img src={arrow} alt="" className='w-[10px] h-[10px]'/>
        </li>
        <li>
            <a href="" className='text-[#f03248]'>
                Tất cả sản phẩm
            </a>
        </li>
            </ul>

            <div className='grid grid-cols-12 gap-[20px]'>
                <div className='col-span-3'>
                    <div className='w-full h-full bg-white rounded-[8px] p-[10px]'>
                        <div className='pb-[5px] mb-[10px] font-normal text-[16px] border-b-1 border-b-stone-300 relative before:content-[""] before:absolute before:w-[66px] before:h-[2px] before:bg-[#f03248] before:top-full'>
                            Danh mục sản phẩm
                        </div>
                        <ul className='text-[13px] text-[#231f20]'>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Đồ Chơi - Mẹ & Bé</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Điện Thoại - Máy Tính Bảng</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Làm Đẹp - Sức Khỏe</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Điện Gia Dụng</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Phụ kiện thời trang</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Đồng hồ và Trang sức</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Nhà cửa & Đời sống</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Bách Hóa Online</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Thiết Bị Số - Phụ Kiện Số</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Điện Tử - Điện Lạnh - TV</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            <li className='flex items-center justify-between line transition duration-200'><a href="" className='flex-1 py-[5px]'>Thể Thao - Dã Ngoại</a><a href=""><IoMdArrowDropdown className='w-[17px] h-[17px] flex items-center justify-center'/></a></li>
                            
                        </ul>
                        <div className='mt-[10px] p-[10px] border-t-1 border-t-stone-200'>
                            <div className='mb-[10px] text-[15px]'>
                                Sắp xếp
                            </div>
                            <ul className='text-[#333]'>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] bg-[#f03248] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Mặc định</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Tên A - Z</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Tên Z - A</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Giá thấp đến cao</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Giá cao đến thấp</span></a></li>
                            </ul>
                        </div>
                        <div className='mt-[10px] p-[10px] border-t-1 border-t-stone-200'>
                            <div className='mb-[10px] text-[15px]'>
                                Chọn mức giá
                            </div>
                            <ul className='text-[#333]'>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Giá dưới 100.000đ</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>100.000đ - 200.000đ</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>200.000đ - 400.000đ</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>400.000đ - 700.000đ</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Giá trên 700.000đ</span></a></li>
                            </ul>
                        </div>
                        <div className='mt-[10px] p-[10px] border-t-1 border-t-stone-200'>
                            <div className='mb-[10px] text-[15px]'>
                                Loại
                            </div>
                            <ul className='text-[#333]'>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'> Áo chống nắng</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'> Bánh bông lan</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'> Bánh quy</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Chuột không dây</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'> Dầu cá</span></a></li>
                                <li className='text-[12px] text-[#f03248] flex items-center gap-1'><a href="">Xem thêm</a> <IoIosArrowDown /></li>
                            </ul>
                        </div>
                        <div className='mt-[10px] p-[10px] border-t-1 border-t-stone-200'>
                            <div className='mb-[10px] text-[15px]'>
                                Thương hiệu
                            </div>
                            <ul className='text-[#333]'>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>AFC</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Apple</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Aukey</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>CeraVe</span></a></li>
                                <li className='hover:text-[#f03248] mb-[10px]'><a href="" className='flex items-center'><i className='w-[15px] h-[15px] hover:border-[#f03248] inline-block rounded-[3px] mr-[7px] border-1 border-[#E7E7E7]'></i><span className='text-[13px]'>Clear men</span></a></li>
                                <li className='text-[12px] text-[#f03248] flex items-center gap-1'><a href="">Xem thêm</a> <IoIosArrowDown /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-span-9'>
                    <div className='w-full p-[10px] bg-white rounded-[8px] mb-[10px]'>
                        <h1 className='uppercase font-bold text-[16px] mb-[10px]'>Tất cả sản phẩm</h1>
                        <div className='grid grid-cols-12 gap-[20px]'>
                            <div className='col-span-4'>
                                <a href=""><img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_three_banner_1.png?1736305669595" alt="" /></a>
                            </div>
                            <div className='col-span-4'>
                                <a href=""><img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_three_banner_2.png?1736305669595" alt="" /></a>
                            </div>
                            <div className='col-span-4'>
                                <a href=""><img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_three_banner_3.png?1736305669595" alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-5 gap-[10px]'>
                         <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>

                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                        <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px] bg-white relative group'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full object-contain mb-[10px]'/>
                            </a>
                            <div className='px-[10px] pb-[10px]'>
                            <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
                            <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                            <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                            </div>
                            <button className='w-[35px] h-[35px] ml-auto shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                            <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white absolute top-[5px] left-[5px]'>- 22%</span>
                            <a href=""><div className='w-[35px] h-[35px] bg-[#f6dee1] rounded-[50%] flex items-center justify-center absolute right-[10px] top-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-[-10px] transition duration-400'><GoHeart fontSize={20} color='#f03248'/></div></a>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className='mt-[20px] flex items-center justify-center'>
                        <ul className='flex items-center gap-[2.5px] text-[#7d7d7d]'>
                            <li className='w-[35px] h-[35px] text-center rounded-[5px] bg-[#f03248] flex items-center justify-center text-[14px] font-bold text-white'><a href="">1</a></li>
                            <li className='w-[35px] h-[35px] text-center rounded-[5px] text-inherit bg-white hover:text-white hover:bg-[#f03248] flex items-center justify-center text-[14px] font-bold '><a href="">2</a></li>
                            <li className='w-[35px] h-[35px] text-center rounded-[5px] text-inherit bg-white hover:text-white hover:bg-[#f03248] flex items-center justify-center text-[14px] font-bold'><a href="">»</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Products;