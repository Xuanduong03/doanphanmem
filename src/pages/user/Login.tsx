import arrow from '../../assets/arrow.svg'
import { Link } from 'react-router-dom';
function Login() {
    return ( 
        <div className="max-w-[1240px] m-auto pb-[25px]">
             <ul className='py-[15px] flex items-center gap-[10px]'>
        <li className='flex items-center gap-[10px]'>
            <a href="" className='text-[#2b2f3366] hover:text-[#f03248]'>Trang chủ</a>
            <img src={arrow} alt="" className='w-[10px] h-[10px]'/>
        </li>
        <li>
            <a href="" className='text-[#f03248]'>
                Đăng nhập tài khoản
            </a>
        </li>
            </ul>

            <div className='w-full flex items-center justify-center'>
                <div className='p-[30px] text-center min-w-[410px] shadow-xl'>
                        <h1 className='text-[#333333] text-[26px] uppercase'>Đăng nhập</h1>
                        <span className='block mt-[10px]'>Nếu bạn chưa có tài khoản, <Link to="/register" className='text-[#f03248] hover:text-[#333]'>Đăng ký tại đây</Link></span>
                        <form action="" className='mt-[25px]'>
                            <div className='mb-[15px]'>
                                <input type="email" placeholder='Email' className='outline-none w-full h-[45px] text-[#333] bg-[#ebebeb] px-[20px]'/>
                            </div>
                            <div className='mb-[15px]'>
                            <input type="password" placeholder='Mật khẩu' className='outline-none w-full h-[45px] text-[#333] bg-[#ebebeb] px-[20px]'/>
                            </div>
                            <button type='submit' className='w-full bg-[#333] text-white border-1 border-[#333] h-[45px] cursor-pointer text-[16px] hover:text-[#f03248] hover:border-[#f03248] hover:bg-white'>Đăng nhập</button>
                        </form>
                        <span className='block my-[15px] text-[#333] hover:text-[#f03248] cursor-pointer'>Quên mật khẩu</span>
                        <form action="" className='mb-[16px]'>
                        <div className='mb-[15px]'>
                                <input type="email" placeholder='Email' className='outline-none w-full h-[45px] text-[#333] bg-[#ebebeb] px-[20px]'/>
                            </div>
                            <button type='submit' className='w-full bg-[#333] text-white border-1 border-[#333] h-[45px] cursor-pointer text-[16px] hover:text-[#f03248] hover:border-[#f03248] hover:bg-white'>Lấy lại mật khẩu</button>
                            <span className='block mt-[15px]'>Hoặc đăng nhập bằng</span>
                        </form>
                        <div className='flex items-center justify-center gap-[4px]'>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" className='w-[129px] h-[37px] object-contain'/>
                            </a>
                            <a href="">
                                <img src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" className='w-[129px] h-[37px] object-contain'/>
                            </a>
                        </div>
                </div>
            </div>
        </div>
     );
}

export default Login;