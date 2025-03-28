import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import phone from '../assets/phone.svg'
import zalo from '../assets/zalo.svg'
import email from '../assets/email.svg'
import mess from '../assets/mess.svg'
import lubel from '../assets/lubel.svg'
function Footer() {
    return ( 
        <>
        <div className='mt-[25px] bg-[#333333] text-white'>
            <div className="py-[30px]">
            <div className='grid grid-cols-12 max-w-[1240px] m-auto'>
            <div className='col-span-4'>
              <h4 className='mb-[15px] text-[16px] uppercase font-bold'>Thông tin liên hệ</h4>
              <div>
                <div className='mb-[12px]'>
                  <strong className='text-[14px]'>Tên công ty</strong>
                  <p className='text-[#fffc] text-[13px]'>Công ty TNHH ND Mall</p>
                </div>
                <div className='mb-[12px]'>
                  <strong className='text-[14px]'>Địa chỉ</strong>
                  <p className='text-[#fffc] text-[13px]'>Tòa nhà Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội</p>
                </div>
                <div className='mb-[12px]'>
                  <strong className='text-[14px]'>Email</strong>
                  <a href=''>
                    <p className='text-[#fffc] text-[13px]'>support@sapo.vn</p>
                  </a>
                </div>
                <div className='mb-[12px]'>
                  <strong className='text-[14px]'>Hotline</strong>
                  <p className='text-[#fffc] text-[13px]'>1900 6750</p>
                </div>
                <div className='mb-[12px]'>
                  <strong className='text-[14px]'>Thời gian hỗ trợ</strong>
                  <p className='text-[#fffc] text-[13px]'>08:30 - 21:30 các ngày trong tuần</p>
                </div>
              </div>
            </div>
            <div className='col-span-8'>
              <div className='grid grid-cols-12'>
                  <div className='col-span-4'>
                  <h4 className='mb-[15px] text-[16px] uppercase font-bold'>Hướng dẫn</h4>
                  <div>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Trang chủ</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Giới thiệu</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Sản phẩm</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Yêu thích</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Liên hệ</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Tin tức</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Hệ thống cửa hàng</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Đăng ký Affiliate</p></a>
                  </div>
                  </div>
                  <div className='col-span-4'>
                  <h4 className='mb-[15px] text-[16px] uppercase font-bold'>Chăm sóc khách hàng</h4>
                  <div>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Các câu hỏi thường gặp</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Gửi yêu cầu hỗ trợ</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Đặt hàng online</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Phương thức vận chuyển</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Hoàn trả đơn hàng</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Đăng ký Affiliate</p></a>
                    <a href=""><p className='text-[13px] text-[#fffc] hover:text-[#f03248] py-1.5'>Chính sách kiểm hàng</p></a>
                  </div>
                  </div>
                  <div className='col-span-4'>
                  <h4 className='mb-[15px] text-[16px] uppercase font-bold'>Kết nối</h4>
                  <div className='flex items-center text-[25px] gap-[15px]'>
                    <FaFacebook />
                    <FaYoutube />
                    <FaTwitter />
                    <FaInstagram />
                    <FaGoogle /> 
                  </div>
                  <div className='mt-[30px]'>
                  <h4 className='mb-[15px] text-[16px] uppercase font-bold'>Tải ứng dụng ND Mall</h4>
                  <div className='flex items-center gap-[3px]'>
                    <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img-app-store.png?1736305669595" alt="" />
                    <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img-google-play.png?1736305669595" alt="" />
                  </div>
                  <div className='mt-[30px]'>
                  <h4 className='mb-[15px] text-[16px] uppercase font-bold'>Phương thức thanh toán</h4>
                  <div className='flex items-center gap-[10px]'>
                      <div>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_payment_1.png?1736305669595" alt="" />
                      </div>
                      <div>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_payment_2.png?1736305669595" alt="" />
                      </div>
                      <div>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_payment_3.png?1736305669595" alt="" />
                      </div>
                      <div>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_payment_4.png?1736305669595" alt="" />
                      </div>
                      <div>
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_payment_5.png?1736305669595" alt="" />
                      </div>
                  </div>
                  </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
            </div>
            <div className="">
               <div className="max-w-[1240px] m-auto border-t-1 border-dashed py-[15px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-4 text-[13px] flex items-center">
							@ Bản quyền thuộc về Xuân Dương
                            <span className="px-[5px]"> | </span>
                        <span className="mr-[3px]">Cung cấp bởi
                        </span>
                        <a href="" className="hover:text-white text-[#f03248]">Xuân Dương</a>
                    </div>
                    <div className="col-span-8 flex items-center">
                        <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo.png?1736305669595" alt="" className="ml-auto" />
                    </div>
                </div>
               </div>
            </div>
       </div>
        <div className="w-[48px] h-[48px] rounded-[50%] bg-[#f03248] fixed bottom-[40px] left-[17px] border-1 border-white flex items-center justify-center text-[20px] text-white">
        <a href=""><img src={lubel} alt="" className="w-[24px] h-[24px]"/></a>
        </div>
        <div className="fixed right-0 bottom-[90px] flex flex-col gap-[5px] z-50">
            <a href=""><img src={phone} alt="" /></a>
            <a href=""><img src={zalo} alt="" /></a>
            <a href=""><img src={email} alt="" /></a>
            <a href=""><img src={mess} alt="" /></a>
        </div>
        </>
     );
}

export default Footer;