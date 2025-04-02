import arrow from '../../assets/arrow.svg'
import share from '../../assets/share.svg'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiShoppingCart } from 'react-icons/ci';
import { GoHeart } from 'react-icons/go';
function ProductDetail() {
    return ( 
       <div className='bg-[#e7eef6]'>
         <div className="max-w-[1240px] m-auto pb-[25px]">
        <ul className='py-[15px] flex items-center gap-[10px]'>
   <li className='flex items-center gap-[10px]'>
       <a href="" className='text-[#2b2f3366] hover:text-[#f03248]'>Trang chủ</a>
       <img src={arrow} alt="" className='w-[10px] h-[10px]'/>
   </li>
   <li>
       <a href="" className='text-[#f03248]'>
       Dưỡng Mi Toàn Diện FEG Eyelash Enhancer Ban Ngày
       </a>
   </li>
       </ul>
       <div className='p-[20px] bg-white rounded-[5px] mb-[20px]'>
        <div className='grid grid-cols-12 gap-[20px]'>
            <div className='col-span-5'>
                <div>
                    <div className='overflow-hidden'>
                        <div className='flex translate-x-[-1000px] transition-all duration-500'>
                            <img src="https://bizweb.dktcdn.net/100/497/938/products/sp6-2.jpg?v=1696237389167" alt="" className='w-[540px] h-[540px] object-contain'/>
                            <img src="https://bizweb.dktcdn.net/100/497/938/products/sp6.jpg?v=1696237386673" alt="" className='w-[540px] h-[540px] object-contain'/>
                            <img src="https://bizweb.dktcdn.net/100/497/938/products/sp6-5.jpg?v=1696237387493" alt="" className='w-[540px] h-[540px] object-contain'/>
                            <img src="https://bizweb.dktcdn.net/100/497/938/products/sp6-4.jpg?v=1696237388000" alt="" className='w-[540px] h-[540px] object-contain'/>
                            <img src="https://bizweb.dktcdn.net/100/497/938/products/sp6-3.jpg?v=1696237388507" alt="" className='w-[540px] h-[540px] object-contain'/>
                        </div>
                    </div>
                    <div className='mt-[10px] overflow-hidden'>
                        <div className='flex gap-[10px] relative'>
                            <div className='w-[90px] h-[90px] p-[5px] rounded-[5px] shrink-0 border-1 border-stone-200 hover:border-1 hover:border-amber-600 cursor-pointer'>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp6.jpg?v=1696237386673" alt="" className='w-full h-full object-contain'/>
                            </div>
                            <div className='w-[90px] h-[90px] p-[5px] rounded-[5px] shrink-0 border-1 border-stone-200 hover:border-1 hover:border-amber-600 cursor-pointer'>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp6-5.jpg?v=1696237387493" alt="" className='w-full h-full object-contain'/>
                            </div>
                            <div className='w-[90px] h-[90px] p-[5px] rounded-[5px] shrink-0 border-1 border-stone-200 hover:border-1 hover:border-amber-600 cursor-pointer'>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp6-4.jpg?v=1696237388000" alt="" className='w-full h-full object-contain'/>
                            </div>
                            <div className='w-[90px] h-[90px] p-[5px] rounded-[5px] shrink-0 border-1 border-stone-200 hover:border-1 hover:border-amber-600 cursor-pointer'>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp6-3.jpg?v=1696237388507" alt="" className='w-full h-full object-contain'/>
                            </div>
                            <div className='w-[90px] h-[90px] p-[5px] rounded-[5px] shrink-0 border-1 border-stone-200 hover:border-1 hover:border-amber-600 cursor-pointer'>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp6-2.jpg?v=1696237389167" alt="" className='w-full h-full object-contain'/>
                            </div>
                            <div className='w-[90px] h-[90px] p-[5px] rounded-[5px] shrink-0 border-1 border-stone-200 hover:border-1 hover:border-amber-600 cursor-pointer'>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp6.jpg?v=1696237386673" alt="" className='w-full h-full object-contain'/>
                            </div>
                            <IoIosArrowBack className='absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer'/>
                            <IoIosArrowForward className='absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer'/>
                        </div>
                    </div>
                    <div className='pt-[20px] flex items-center gap-[10px]'>
                        <div className='flex items-center gap-[5px]'>
                            <img src={share} alt="" />
                            Chia sẻ
                        </div>
                        <div className='text-white flex items-center gap-[5px]'>
                            <div className='w-[25px] h-[25px] bg-[#f03248] flex items-center justify-center rounded-[50%]'><a href=""><FaFacebookF fontSize={12}/></a></div>
                            <div className='w-[25px] h-[25px] bg-[#f03248] flex items-center justify-center rounded-[50%]'><a href=""><FaPinterestP fontSize={12}/></a></div>
                            <div className='w-[25px] h-[25px] bg-[#f03248] flex items-center justify-center rounded-[50%]'><a href=""><FaTwitter fontSize={12}/></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-7'>
                <h1 className='mb-[15px] text-[24px] font-medium'>Dưỡng Mi Toàn Diện FEG Eyelash Enhancer Ban Ngày</h1>
                <div className='flex gap-0.5'>
                    Mã sản phẩm: <p className='text-[#f03248]'>Đang cập nhật</p>
                </div>
                <div className='mb-[10px]'>
                    <span>Thương hiệu: </span>
                    <span className='text-[#f03248]'>FEG</span>

                    <span> | </span>
                    <span>Tình trạng: </span>
                    <span className='text-[#f03248]'>Còn hàng</span>
                </div>
                <div className='mb-[15px]'>
                <span className='text-[30px] font-medium text-[#f03248] block'>350.000₫</span>
                <span className='text-[16px] text-[#76809B] line-through'>450.000₫</span>
                </div>
                <div className='pt-[15px] pb-[10px] border-y-1 border-y-stone-200 flex gap-[20px] items-center mb-[20px] relative group'>
                    <span className='font-bold text-[14px]'>Mã giảm giá</span>
                    <div className='flex gap-[5px]'>
                        <span className='py-[3px] px-[7px] bg-[#f6dee1] text-[#f03248]'>
                            Giảm 50%
                        </span>
                        <span className='py-[3px] px-[7px] bg-[#f6dee1] text-[#f03248]'>
                            Giảm 15%
                        </span>
                        <span className='py-[3px] px-[7px] bg-[#f6dee1] text-[#f03248]'>
                            Giảm 10k
                        </span>
                        <span className='py-[3px] px-[7px] bg-[#f6dee1] text-[#f03248]'>
                            Giảm 500k
                        </span>
                    </div>
                    <div className='p-[15px] absolute top-[100%] bg-white border-1 border-stone-200 w-full hidden group-hover:block'>
                        <p className='mb-[5px] before:content-["•"] before:absolute before:left-0 before:text-[30px] flex items-center gap-[5px] relative pl-[15px]'>Giảm <b>50%</b>  cho đơn hàng giá trị tối thiểu <b>500K</b> <span className='py-[2px] px-[5px] bg-[#f03248] text-white text-[10px] rounded-[5px] cursor-pointer'>Sao chép mã</span></p>
                        <p className='mb-[5px] before:content-["•"] before:absolute before:left-0 before:text-[30px] flex items-center gap-[5px] relative pl-[15px]'>Giảm <b>15%</b>  cho đơn hàng giá trị tối thiểu <b>500K</b> <span className='py-[2px] px-[5px] bg-[#f03248] text-white text-[10px] rounded-[5px] cursor-pointer'>Sao chép mã</span></p>
                        <p className='mb-[5px] before:content-["•"] before:absolute before:left-0 before:text-[30px] flex items-center gap-[5px] relative pl-[15px]'>Giảm <b>50%</b>  cho đơn hàng giá trị tối thiểu <b>500K</b> <span className='py-[2px] px-[5px] bg-[#f03248] text-white text-[10px] rounded-[5px] cursor-pointer'>Sao chép mã</span></p>
                        <p className='mb-[5px] before:content-["•"] before:absolute before:left-0 before:text-[30px] flex items-center gap-[5px] relative pl-[15px]'>Tặng phiếu mua hàng khi mua từ <b>500k</b><span className='py-[2px] px-[5px] bg-[#f03248] text-white text-[10px] rounded-[5px] cursor-pointer'>Sao chép mã</span></p>
                    </div>
                </div>
                <div className='mb-[25px]'>
                <div className='flex items-center gap-[30px] mb-[20px]'>
                <span className='font-bold text-[14px]'>Số lượng:</span>
                <div className='w-[80px] flex items-center h-[35px] border-1 border-stone-300 rounded-[5px]'>
                    <button className='w-[25px] h-full shrink-0'>-</button>
                    <input type="text" defaultValue={1} className='w-full outline-none text-center' />
                    <button className='w-[25px] h-full shrink-0'>+</button>
                </div>
                </div>
                <div className='inline-block'>
                    <button type='submit' className='py-[10px] px-[20px] text-[16px] font-medium border-1 border-[#f03248] text-white rounded-[8px] bg-[#f03248] cursor-pointer mr-[10px] hover:bg-[#f6dee1] hover:text-[#f03248]'>Thêm vào giỏ hàng</button>
                </div>
                <div className='inline-block'>
                <button type='submit' className='py-[10px] px-[20px] text-[16px] font-medium border-1 border-[#f03248] text-[#f03248] rounded-[8px] bg-[#f6dee1] cursor-pointer mr-[10px] hover:bg-[#f03248] hover:text-white'>Mua ngay</button>
                </div>
                </div>
                <p className='mb-[10px] text-[#2B2F33] text-[14px] font-bold'>Quyền lợi & chính sách:</p>
                <div className='grid grid-cols-12'>
                    <div className='col-span-4 flex items-center gap-[10px]'>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_benefit_pro_1.png?1736305669595" alt="" />
                        <p className='text-[#2b2f33cc]'>7 ngày hoàn trả miễn phí</p>
                    </div>
                    <div className='col-span-4 flex items-center gap-[10px]'>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_benefit_pro_2.png?1736305669595" alt="" />
                        <p className='text-[#2b2f33cc]'>Hàng chính hãng</p>
                    </div>
                    <div className='col-span-4 flex items-center gap-[10px]'>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_benefit_pro_3.png?1736305669595" alt="" />
                        <p className='text-[#2b2f33cc]'>Miễn phí vận chuyển</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className='p-[20px] bg-white rounded-[5px]'>
       <div className='grid grid-cols-12 gap-[20px]'>
        <div className='col-span-9'>
        <div className='font-medium text-[18px] b-[5px] mb-[20px] pb-[5px] border-b-1 border-b-stone-200 relative before:content-[""] before:absolute before:w-[66px] before:h-[2px] before:bg-[#f03248] before:top-full'>
           Thông tin sản phẩm
        </div>
            <div>
        <p className='mb-[20px]'>Serum dưỡng mi FEG Eyelash Enhancer được nhập khẩu và phân phối độc quyền bởi FEG Beauty. Cam kết chính hãng 100%, hoàn tiền 300% nếu phát hiện hàng giả. Shop có đầy đủ giấy tờ chứng mình nguồn gốc, xuất xứ của sản phẩm.</p>
        <p className='mb-[20px]'>1. Công dụng nổi bật</p>
        <p className='mb-[20px]'>• Dưỡng dài mi nhanh chóng, bảo vệ mi khỏi các tác hại từ môi trường</p>
        <p className='mb-[20px]'>• Phục hồi hư tốn tự sâu bên trong, ngăn ngừa gãy rụng</p>
        <p className='mb-[20px]'>• Ưu điểm: Không thâm mắt - Không cay mắt - Không hóa chất độc hại</p>
        <p className='mb-[20px]'>2. Thành phần nổi bật</p>
        <p className='mb-[20px]'>• Panthenol (Dẫn xuất của Vitamin B5): Hỗ trợ phục hồi mi hư tổn (do uốn mi, nối mi, mi giả). Hỗ trợ giữ độ ẩm cho mi - chống giòn mi và gãy rụng.&nbsp;</p>
        <p className='mb-[20px]'>• Biotin: Biotin (Vitamin B7): Hỗ trợ sự phát triển của lông mi, làm dày lông mi của bạn, ngăn lông mi khỏi việc khô và &nbsp;gãy rụng.</p>
        <p className='mb-[20px]'>• Chiết xuất nhân sâm: Hỗ trợ quá trình lão hóa của mi, củng cố sợi mi và ngăn mi bị gãy rụng.&nbsp;</p>
        <p className='mb-[20px]'>3. Hướng dẫn sử dụng</p>
        <p className='mb-[20px]'>• Vệ sinh vùng mi mắt và lau khô trước khi sử dụng dưỡng mi</p>
        <p className='mb-[20px]'>• Sử dụng sản phẩm vào buổi sáng</p>
        <p className='mb-[20px]'>• Lấy một lượng serum vừa đủ apply lên gốc mi</p>
        <p className='mb-[20px]'>• Lưu ý: Nên sử dụng sản phẩm ở bước cuối cùng của skincare.</p>
        <p className='mb-[20px]'>4. Thông tin khác</p>
        <p className='mb-[20px]'>• Dung tích: 3ml/ lọ</p>
        <p className='mb-[20px]'>• Xuất xứ thương hiệu: Hoa Kỳ</p>
        <p className='mb-[20px]'>• Xuất xứ sản phẩm: Trung Quốc</p>
        <p className='mb-[20px]'>5. Chính sách bảo hành</p>
        <p className='mb-[20px]'>• HOÀN TIỀN 300% nếu phát hiện hàng giả</p>
        <p className='mb-[20px]'>6. Các nhận biết FEG chính hãng</p>
        <p className='mb-[20px]'>• Có nhãn phụ bằng tiếng Việt theo quy định mỹ phẩm nhập khẩu chính hãng</p>
        <p className='mb-[20px]'>• Có tem chống hàng giả trên đầu hộp</p>
        <p className='mb-[20px]'>• Quét QR code ra website chính thức của hãng tại Hoa Kỳ: fegeyelash.com</p>
        <p className='mb-[20px]'>• Địa chỉ email in trên hộp: order@fegeyelash.com</p>
                    </div>
        </div>
        <div className='col-span-3'>
            <div className='sticky top-0'>
            <div className='font-medium text-[18px] b-[5px] mb-[10px] pb-[5px] border-b-1 border-b-stone-200 relative before:content-[""] before:absolute before:w-[66px] before:h-[2px] before:bg-[#f03248] before:top-full'>
           Tin nổi bật
        </div>
        <div className='p-[5px] flex gap-[10px]'>
                  <img src="//bizweb.dktcdn.net/thumb/grande/100/497/938/articles/t12.jpg?v=1696325901413" alt="" className='w-[96px] h-[54-px] object-contain shrink-0' />
                  <div>
                  <p className='line-clamp-2 text-[#303846] text-[13px] hover:text-[#f03248]'>Xiaomi 13 đang được thử nghiệm MIUI 15 ổn định dựa trên Android 14</p>
                  </div>
                </div>
                <div className='p-[5px] flex gap-[10px]'>
                  <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t11.jpg?v=1696325869497" alt="" className='w-[96px] h-[54-px] object-contain shrink-0' />
                  <a href=''>
                  <p className='line-clamp-2 text-[#303846] text-[13px] hover:text-[#f03248]'>Apple Pencil 3 khả năng có cơ chế thay ngòi cùng với tính năng hoàn toàn mới</p>
                  </a>
                </div>
                <div className='p-[5px] flex gap-[10px]'>
                  <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t10.jpg?v=1696325835147" alt="" className='w-[96px] h-[54-px] object-contain shrink-0' />
                  <a href=''>
                  <p className='line-clamp-2 text-[#303846] text-[13px] hover:text-[#f03248]'>Tư vấn chọn mua laptop HP hỗ trợ tác vụ học tập văn phòng cơ bản bán chạy tại TGDĐ</p>
                  </a>
                </div>
                <div className='p-[5px] flex gap-[10px]'>
                  <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t9.jpg?v=1696325755650" alt="" className='w-[96px] h-[54-px] object-contain shrink-0' />
                  <a href=''>
                  <p className='line-clamp-2 text-[#303846] text-[13px] hover:text-[#f03248]'>Apple dự kiến sẽ sớm đưa một công cụ mạnh mẽ tích hợp AI lên App Store</p>
                  </a>
                </div>
                <div className='p-[5px] flex gap-[10px]'>
                  <img src="https://bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t8.jpg?v=1696325716373" alt="" className='w-[96px] h-[54-px] object-contain shrink-0' />
                  <a href=''>
                  <p className='line-clamp-2 text-[#303846] text-[13px] hover:text-[#f03248]'>Tầm giá 1 triệu, rinh ngay combo tai nghe + loa này, chất lượng khỏi bàn, chill nhạc miễn chê</p>
                  </a>
                </div>
            </div>
        </div>
       </div>
       </div>
       <div className='mt-[20px] p-[20px] bg-white rounded-[5px]'>
       <div className='font-medium text-[18px] b-[5px] mb-[20px] pb-[5px] border-b-1 border-b-stone-200 relative before:content-[""] before:absolute before:w-[110px] before:h-[2px] before:bg-[#f03248] before:top-full'>
           Sản phẩm cùng loại
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
        </div>
       </div>
       </div>
       </div>
     );
}

export default ProductDetail;