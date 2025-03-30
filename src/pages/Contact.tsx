import arrow from '../assets/arrow.svg'
import location from '../assets/location.svg'
import email from '../assets/email2.svg'
import phone from '../assets/phone2.svg'
function Contact() {
    return ( 
        <div className="max-w-[1240px] m-auto pb-[25px]">
            <ul className='py-[15px] flex items-center gap-[10px]'>
        <li className='flex items-center gap-[10px]'>
            <a href="" className='text-[#2b2f3366] hover:text-[#f03248]'>Trang chủ</a>
            <img src={arrow} alt="" className='w-[10px] h-[10px]'/>
        </li>
        <li>
            <a href="" className='text-[#f03248]'>
                Liên hệ
            </a>
        </li>
            </ul>
            <div className='grid grid-cols-12 gap-[20px]'>
                <div className='col-span-6'>
                    <h4 className='uppercase text-[15px] font-bold mb-[20px]'>Nd Mail</h4>
                    <div className='mb-[20px]'>
                        <div className='flex items-center'>
                            <img src={location} alt="" className='w-[15px] h-[15px] mr-[10px]'/>
                            <b>Địa chỉ:</b>
							Đồng Lạc, Chí Linh, Hải Dương
                        </div>
                        <div className='flex items-center'>
                            <img src={email} alt=""  className='w-[15px] h-[15px] mr-[10px]'/>
                            <b>Email: </b>
                            <a href="" className='line'>support@sapo.vn</a>
                        </div>
                        <div className='flex items-center'>
                            <img src={phone} alt=""  className='w-[15px] h-[15px] mr-[10px]'/>
                            <b>Hotline: </b>
                            <a href="" className='line'>1900 6750</a>
                        </div>
                    </div>
                    <h4 className='uppercase text-[15px] font-bold mb-[20px]'>Liên hệ với chúng tôi</h4>
                    <form action="">
                        <input type="text" className='py-[5px] px-[20px] text-[14px] border-1 border-stone-300 w-full outline-none mb-[15px]' placeholder='Họ và tên' required/>
                        <input type="email" className='py-[5px] px-[20px] text-[14px] border-1 border-stone-300 w-full outline-none mb-[15px]' placeholder='Email' required/>
                        <input type="phone" className='py-[5px] px-[20px] text-[14px] border-1 border-stone-300 w-full outline-none mb-[15px]' placeholder='Điện thoại*' required/>
                        <textarea name="" id="" className='py-[5px] px-[20px] text-[14px] border-1 border-stone-300 w-full outline-none mb-[15px]' placeholder='Nội dung' rows={5}></textarea>
                        <button type="submit" className='h-[35px] px-[20px] text-white cursor-pointer bg-[#333] text-[14px] hover:bg-[#ff5e14]'>Gửi thông tin</button>
                    </form>
                </div>
                <div className='col-span-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26959.76242344997!2d106.36675883812786!3d21.035150365438668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135828f4a778b5d%3A0x6c280425733f13e1!2zxJDhu5NuZyBM4bqhYywgQ2jDrSBMaW5oLCBI4bqjaSBExrDGoW5nLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1743320667075!5m2!1svi!2s" width="100%" height="430" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>
     );
}

export default Contact;