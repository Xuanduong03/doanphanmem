import logo from "../assets/logo.svg"
import search from '../assets/search.svg'
import heart from '../assets/heart.svg'
import user from '../assets/user.svg'
import cart from '../assets/cart.svg'
import { FaCaretDown } from "react-icons/fa";
function Header() {
    return ( 
        <header className="w-full bg-[#f03248]">
        <div className="border-b border-b-[#fff6]">
            <div className="max-w-[1240px] m-auto flex items-center py-[25px] ]">
                <a href="">
                    <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo.png?1736305669595" className="mr-[90px] cursor-pointer" />
                </a>
                <div className="text-white flex items-center gap-2 text-[15px] mr-4">
                    <img src={logo} />
                    <div className="hover:opacity-55 cursor-pointer">
                        <p>Hệ thống cửa hàng</p>
                        <p className="font-bold">40 Cửa hàng</p>
                    </div>
                </div>

                <form action="">
                    <div className="flex items-center h-[49px] rounded-xl bg-amber-50">
                        <div className="h-full w-[50px] flex items-center justify-center">
                            <img src={search} alt="" className="w-[28px]" />
                        </div>
                        <input type="text" name="search" className="w-[400px] outline-none h-full" placeholder="Tìm kiếm sản phẩm...." />
                        <div className="h-[30px] flex items-center px-4 border-l border-stone-300">
                            <button type="submit" className="text-[#f03248] font-semibold text-[14px] cursor-pointer">Tìm kiếm</button>
                        </div>
                    </div>
                </form>
                <div className="flex ml-auto text-white text-[15px] items-center gap-6">
                    <a href="" className="flex flex-col items-center hover:opacity-55">
                        <img src={heart} alt="" />
                        Yêu thích
                    </a>
                    <a href="" className="flex flex-col items-center hover:opacity-55">
                        <img src={user} alt="" />
                        Tài khoản
                    </a>
                    <a href="" className="flex flex-col items-center relative hover:opacity-55">
                        <img src={cart} alt="" />
                        <span className="absolute top-[-10px] right-[9px] rounded-4xl w-4 h-4 bg-amber-50 text-[#f03248] flex items-center justify-center">0</span>
                        Giỏ hàng
                    </a>
                </div>
            </div>
        </div>


        <div className="max-w-[1240px] m-auto text-white font-medium">
            <ul className="flex">
                <li className="p-[15px] text-amber-200"><a href=""> Trang chủ</a></li>
                <li className="p-[15px]"><a href=""> Giới thiệu</a></li>
                <li className="p-[15px] group relative"><a href="" className="flex items-center gap-1.5"> Sản phẩm <FaCaretDown />
                </a>
                    <div className="opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible absolute min-w-[900px] max-w-[1000px] bg-white text-black left-0 top-[100%] p-3 font-normal text-[14px] shadow-2xl">
                        <div className="grid grid-cols-4 gap-6">
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Đồ Chơi - Mẹ & Bé</a></li>
                                    <li><a href="" className="line">Tã, Bỉm</a></li>
                                    <li><a href="" className="line">Dinh dưỡng cho bé</a></li>
                                    <li><a href="" className="line">Thực phẩm ăn dặm</a></li>
                                    <li><a href="" className="line">Dinh dưỡng cho mẹ</a></li>
                                    <li><a href="" className="line">Đồ dùng cho bé</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Điện Thoại - Máy Tính Bảng</a></li>
                                    <li><a href="" className="line">Điện thoại Smartphone</a></li>
                                    <li><a href="" className="line">Máy tính bảng</a></li>
                                    <li><a href="" className="line">Máy đọc sách</a></li>
                                    <li><a href="" className="line">Điện thoại phổ thông</a></li>
                                    <li><a href="" className="line">Điện thoại bàn</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Điện Thoại - Máy Tính Bảng</a></li>
                                    <li><a href="" className="line">Điện thoại Smartphone</a></li>
                                    <li><a href="" className="line">Máy tính bảng</a></li>
                                    <li><a href="" className="line">Máy đọc sách</a></li>
                                    <li><a href="" className="line">Điện thoại phổ thông</a></li>
                                    <li><a href="" className="line">Điện thoại bàn</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Điện Thoại - Máy Tính Bảng</a></li>
                                    <li><a href="" className="line">Điện thoại Smartphone</a></li>
                                    <li><a href="" className="line">Máy tính bảng</a></li>
                                    <li><a href="" className="line">Máy đọc sách</a></li>
                                    <li><a href="" className="line">Điện thoại phổ thông</a></li>
                                    <li><a href="" className="line">Điện thoại bàn</a></li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Đồ Chơi - Mẹ & Bé</a></li>
                                    <li><a href="" className="line">Tã, Bỉm</a></li>
                                    <li><a href="" className="line">Dinh dưỡng cho bé</a></li>
                                    <li><a href="" className="line">Thực phẩm ăn dặm</a></li>
                                    <li><a href="" className="line">Dinh dưỡng cho mẹ</a></li>
                                    <li><a href="" className="line">Đồ dùng cho bé</a></li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Điện Thoại - Máy Tính Bảng</a></li>
                                    <li><a href="" className="line">Điện thoại Smartphone</a></li>
                                    <li><a href="" className="line">Máy tính bảng</a></li>
                                    <li><a href="" className="line">Máy đọc sách</a></li>
                                    <li><a href="" className="line">Điện thoại phổ thông</a></li>
                                    <li><a href="" className="line">Điện thoại bàn</a></li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Điện Thoại - Máy Tính Bảng</a></li>
                                    <li><a href="" className="line">Điện thoại Smartphone</a></li>
                                    <li><a href="" className="line">Máy tính bảng</a></li>
                                    <li><a href="" className="line">Máy đọc sách</a></li>
                                    <li><a href="" className="line">Điện thoại phổ thông</a></li>
                                    <li><a href="" className="line">Điện thoại bàn</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Điện Thoại - Máy Tính Bảng</a></li>
                                    <li><a href="" className="line">Điện thoại Smartphone</a></li>
                                    <li><a href="" className="line">Máy tính bảng</a></li>
                                    <li><a href="" className="line">Máy đọc sách</a></li>
                                    <li><a href="" className="line">Điện thoại phổ thông</a></li>
                                    <li><a href="" className="line">Điện thoại bàn</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Điện Thoại - Máy Tính Bảng</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">
                                        Điện Tử - Điện Lạnh - TV</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">Thể Thao - Dã Ngoại</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="font-bold"><a href="" className="line">
                                        Thiết Bị Số - Phụ Kiện Số</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </li>
                <li className="p-[15px]"><a href=""> Yêu thích</a></li>
                <li className="p-[15px]"><a href="">Liên hệ </a></li>
                <li className="p-[15px]"><a href=""> Tin tức</a></li>
                <li className="p-[15px]"><a href=""> Hệ thống cửa hàng</a></li>
                <li className="p-[15px]"><a href=""> Đăng ký Affiliate</a></li>
            </ul>
        </div>
    </header>
     );
}

export default Header;