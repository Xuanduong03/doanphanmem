import { FaUserAlt } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
function Checkout() {
    return ( 
       <div className="max-w-[1240px] m-auto">
            <div className="flex">
            <div className="w-[52%] p-[20px] flex-1">
                <a href="" className="text-[#2a9dcc] text-[28px] cursor-pointer hover:opacity-70">ND Mall</a>
                <div className="grid grid-cols-12 gap-[30px]">
                    <div className="col-span-6">
                        <div className="flex justify-between">
                            <h4 className="text-[#333] font-semibold text-[19px]">Thông tin nhận hàng</h4>
                            <Link to={'/login'} className="flex items-center gap-1 text-[#2a9dcc] hover:opacity-70">
                            <FaUserAlt />
                            Đăng nhập
                            </Link>
                        </div>
                        <form action="">
                            <input type="email" placeholder="Email" className="h-[44px] w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"/>
                            <input type="text" placeholder="Họ và tên" className="h-[44px] w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"/>
                            <input type="text" placeholder="Số điện thoại" className="h-[44px] w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"/>
                            <input type="text" placeholder="Địa chỉ (tùy chọn)" className="h-[44px] w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"/>
                            <input type="text" placeholder="Tỉnh thành (tùy chọn)" className="h-[44px] w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"/>
                            <input type="text" placeholder="Quận huyện (tùy chọn)" className="h-[44px] w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"/>
                            <input type="text" placeholder="Phường xã (tùy chọn)" className="h-[44px] w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"/>
                            <textarea name="" id="" placeholder="Ghi chú (Tùy chọn)" rows={3} className="w-full outline-none bg-white border-1 border-[#d9d9d9] rounded-[4px] text-[#333] py-[13px] px-[11px] focus:border-[#2a9dcc] mt-[10px]"></textarea>
                        </form>
                    </div>
                    <div className="col-span-6">
                        <h2 className="text-[#333] font-semibold text-[19px]">Vận chuyển</h2>
                        <div className="flex items-center justify-between p-[14px] w-full bg-white border-1 border-[#d9d9d9] rounded-[4px] mt-[10px]">
                           <div className="flex items-center gap-2">
                           <input type="radio" name="" id="" checked className="cursor-pointer relative appearance-none w-[18px] h-[18px] checked:bg-[#337ab7] rounded-[50%] border-1 border-stone-200 transition-all duration-300 before:content-[''] before:inline-block before:w-[4px] before:h-[4px] before:absolute before:bg-white before:rounded-[50%] before:top-[50%] before:left-[50%] before:translate-[-50%]"/>
                           <span className="text-[#545454]">Giao hàng tận nơi</span>
                           </div>
                           <span className="font-medium text-[#333]">40.000₫</span>
                        </div>

                        <div className="pt-[28px]">
                            <h2 className="text-[#333] font-semibold text-[19px]">Thanh toán</h2>
                            <div className="border-1 border-stone-300 rounded-[4px] mt-[10px]">
                            <div className="flex items-center justify-between p-[14px] w-full bg-white">
                           <div className="flex items-center gap-2">
                           <input type="radio" name="checkout" id="" className="cursor-pointer relative appearance-none w-[18px] h-[18px] checked:bg-[#337ab7] rounded-[50%] border-1 border-stone-200 transition-all duration-800 before:content-[''] before:inline-block before:w-[4px] before:h-[4px] before:absolute before:bg-white before:rounded-[50%] before:top-[50%] before:left-[50%] before:translate-[-50%]"/>
                           <span className="text-[#545454]">Chuyển khoản</span>
                           </div>
                           <FaRegMoneyBillAlt fontSize={25} color="#337ab7"/>
                        </div>
                        <div className="flex items-center justify-between p-[14px] w-full bg-white border-t-1 border-t-stone-300">
                           <div className="flex items-center gap-2">
                           <input type="radio" name="checkout" id="" className="cursor-pointer relative appearance-none w-[18px] h-[18px] checked:bg-[#337ab7] rounded-[50%] border-1 border-stone-200 transition-all duration-800 before:content-[''] before:inline-block before:w-[4px] before:h-[4px] before:absolute before:bg-white before:rounded-[50%] before:top-[50%] before:left-[50%] before:translate-[-50%]"/>
                           <span className="text-[#545454]">Thu hộ (COD)</span>
                           </div>
                           <FaRegMoneyBillAlt fontSize={25} color="#337ab7"/>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[32%] border-l-1 border-l-stone-300">
                    <div className="pl-[28px] py-[20px] text-[#333] font-semibold text-[19px] border-b-1 border-b-stone-300">
                        Đơn hàng (4 sản phẩm)
                    </div>

                    <div className="pl-[28px]">
                        <div className="py-[14px] border-b-1 border-b-stone-300 h-[calc(100vh-480px)] overflow-y-auto">
                            <div className="flex flex-col gap-[10px]">
                            <div className="flex items-center gap-2">
                                   <div className="w-[50px] h-[50px] border-1 border-stone-300 shrink-0 relative"> <img src="//bizweb.dktcdn.net/thumb/thumb/100/497/938/products/sp20.jpg?v=1696241238643" alt="" className="w-full h-full object-contain" />
                                    <span className="absolute w-[19px] h-[19px] bg-[#2a9dcc] text-white text-center rounded-[50%] top-[-7px] right-[-7px] text-[11px] flex items-center justify-center">1</span>
                                   </div>
                                   <span className="line-clamp-2 text-[#333]">Tai Nghe Bluetooth Headphone Edifier W820NB PLUS thoáng khí thoải mái</span>
                                   <span className="text-[#717171]">1.399.000₫</span>
                            </div>
                            <div className="flex items-center gap-2">
                                   <div className="w-[50px] h-[50px] border-1 border-stone-300 shrink-0 relative"> <img src="//bizweb.dktcdn.net/thumb/thumb/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className="w-full h-full object-contain" />
                                    <span className="absolute w-[19px] h-[19px] bg-[#2a9dcc] text-white text-center rounded-[50%] top-[-7px] right-[-7px] text-[11px] flex items-center justify-center">1</span>
                                   </div>
                                   <span className="line-clamp-2 text-[#333]">Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</span>
                                   <span className="text-[#717171]">350.000₫</span>
                            </div>
                            <div className="flex items-center gap-2">
                                   <div className="w-[50px] h-[50px] border-1 border-stone-300 shrink-0 relative"> <img src="//bizweb.dktcdn.net/thumb/thumb/100/497/938/products/1-1b8641c8-6064-43a5-8e07-dc697eb04a6e.jpg?v=1696233327897" alt="" className="w-full h-full object-contain" />
                                    <span className="absolute w-[19px] h-[19px] bg-[#2a9dcc] text-white text-center rounded-[50%] top-[-7px] right-[-7px] text-[11px] flex items-center justify-center">1</span>
                                   </div>
                                   <span className="line-clamp-2 text-[#333]">Perfume Đánh Bay Gàu Ngứa Và Lưu Hương Nước Hoa Đẳng Cấp</span>
                                   <span className="text-[#717171]">150.000₫</span>
                            </div>
                            <div className="flex items-center gap-2">
                                   <div className="w-[50px] h-[50px] border-1 border-stone-300 shrink-0 relative"> <img src="//bizweb.dktcdn.net/thumb/thumb/100/497/938/products/sp1.jpg?v=1696238355997" alt="" className="w-full h-full object-contain" />
                                    <span className="absolute w-[19px] h-[19px] bg-[#2a9dcc] text-white text-center rounded-[50%] top-[-7px] right-[-7px] text-[11px] flex items-center justify-center">1</span>
                                   </div>
                                   <span className="line-clamp-2 text-[#333]">	
                                   Bánh quy dinh dưỡng AFC vị lúa mì, combo 2 hộp x 172g</span>
                                   <span className="text-[#717171]">60.000₫
                                   </span>
                            </div>
                            </div>
                           
                        </div>
                   <div className="py-[14px] border-b-1 border-b-stone-300">
                        <div className="p-[6px] w-full flex items-center">
                            <input type="text" className="flex-1 outline-none border-1 border-stone-300 text-[#717171] py-[13px] px-[11px] h-[44px] rounded-[4px] focus:border-[#2a9dcc]" placeholder="Nhập mã giảm giá"/>
                            <button className="py-[13px] px-[23px] bg-[#357ebd] ml-[15px] text-white rounded-[5px] hover:opacity-80 cursor-pointer">Áp dụng</button>
                        </div>
                   </div>
                   <div className="py-[14px] text-[#717171]">
                    <div className="flex items-center justify-between mt-[10px]">
                        <span>Tạm tính</span>
                        <span>1.959.000₫</span>
                    </div>
                    <div className="flex items-center justify-between mt-[10px]">
                        <span>Phí vận chuyển</span>
                        <span>40.000₫</span>
                    </div>
                    <div className="border-t-1 border-t-stone-300 mt-[20px]">
                        <div className="mt-[10px] flex items-center justify-between">
                            <span className="text-[20px]">Tổng cộng</span>
                            <span className="text-[20px] text-[#2a9dcc]">1.999.000₫</span>
                        </div>
                    </div>
                   </div>
                   <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[2px] text-[#2a9dcc] hover:opacity-70 group">
                        <IoIosArrowBack fontSize={18} className="cursor-pointer group-hover:translate-x-[-5px] transition duration-400"/>
                        <Link to={'/'} className="">Quay về giỏ hàng</Link>
                    </div>
                    <button className="py-[13px] px-[23px] bg-[#357ebd] ml-[15px] text-white rounded-[5px] hover:opacity-80 cursor-pointer uppercase">Đặt hàng</button>
                   </div>
                    </div>
            </div>
            </div>
       </div>
     );
}

export default Checkout;