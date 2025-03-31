import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom';
function Cart() {
    return ( 
        <div className="max-w-[1240px] m-auto pb-[25px]">
             <ul className='py-[15px] flex items-center gap-[10px]'>
        <li className='flex items-center gap-[10px]'>
            <a href="" className='text-[#2b2f3366] hover:text-[#f03248]'>Trang chủ</a>
            <img src={arrow} alt="" className='w-[10px] h-[10px]'/>
        </li>
        <li>
            <a href="" className='text-[#f03248]'>
                Giỏ hàng
            </a>
        </li>
            </ul>
            <h4 className='text-[22px] mb-[20px] font-medium'>Giỏ hàng của bạn</h4>
           <div className='grid grid-cols-12 gap-[20px]'>
            <div className='col-span-9'>
<table className='border-1 border-stone-200 w-full'>
    <thead className='p-[50px]'>
        <tr>
            <th className=''>Ảnh</th>
            <th className=''>Tên sản phẩm</th>
            <th className=''>Đơn giá</th>
            <th className=''>Số lượng</th>
            <th className=''>Thành tiền</th>
            <th className=''>Hành động</th>
        </tr>
    </thead>
    <tbody>
        <tr className='border-t-1 border-t-stone-200'>
            <td>
                <a href="">
                    <img src="https://bizweb.dktcdn.net/thumb/compact/100/497/938/products/sp9.jpg" alt="" className='w-[110px] h-[110px] object-contain'/>
                </a>
            </td>
            <td><a href="" className='line'>Nồi cơm điện tử cao cấp đa năng Elmich 1,5L RCE-1807</a></td>
            <td className='text-[14px] text-[#f03248] font-bold'><p>1.690.000₫</p></td>
            <td><div className='w-[80px] flex items-center h-[35px] border-1 border-stone-300 rounded-[5px]'>
        <button className='w-[25px] h-full shrink-0'>-</button>
        <input type="text" defaultValue={1} className='w-full outline-none text-center' />
        <button className='w-[25px] h-full shrink-0'>+</button>
    </div></td>
            <td className='text-[14px] text-[#f03248] font-bold'>1.690.000₫</td>
            <td><a href='' className='p-[10px] bg-[#f03248] text-white hover:opacity-70 rounded-[8px]'>Xóa</a></td>
        </tr>
        <tr className='border-t-1 border-t-stone-200'>
            <td>
                <a href="">
                    <img src="https://bizweb.dktcdn.net/thumb/compact/100/497/938/products/sp6.jpg" alt="" className='w-[110px] h-[110px] object-contain'/>
                </a>
            </td>
            <td><a href="" className='line'>Dưỡng Mi Toàn Diện FEG Eyelash Enhancer Ban Ngày</a></td>
            <td className='text-[14px] text-[#f03248] font-bold'><p>350.000₫</p></td>
            <td><div className='w-[80px] flex items-center h-[35px] border-1 border-stone-300 rounded-[5px]'>
        <button className='w-[25px] h-full shrink-0'>-</button>
        <input type="text" defaultValue={1} className='w-full outline-none text-center' />
        <button className='w-[25px] h-full shrink-0'>+</button>
    </div></td>
            <td className='text-[14px] text-[#f03248] font-bold'>350.000₫</td>
            <td><a href='' className='p-[10px] bg-[#f03248] text-white hover:opacity-70 rounded-[8px]'>Xóa</a></td>
        </tr>
    </tbody>
</table>
<div className='mt-[20px]'>
    <div className= 'flex justify-end'>
        <div className='w-[30%]'>
        <div className='flex items-center justify-between'>
            <p className='font-medium'>Tổng tiền: </p>
            <p className='font-bold text-[#f03248] text-[16px]'>2.040.000₫</p>
        </div>
        <Link to={'/checkout'}><button className='w-full text-white bg-[#333] border-1 border-[#333] p-[10px] mt-[10px] cursor-pointer hover:bg-transparent hover:text-inherit'>Thanh toán</button></Link>
        </div>
    </div>
</div>
            </div>
            <div className='col-span-3'>
                <div className='p-[10px]  w-full bg-[#f8f8f8]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Thời gian giao hàng</h4>
                   <form action="">
                   <div className='flex items-center gap-1.5'>
                        <div>
                            <input type="date" placeholder='Chọn ngày' className='outline-none bg-white p-[10px]' required/>
                        </div>
                        <div>
                        <select name="time" className='outline-none bg-white p-[11px]' required>
									<option selected="">Chọn thời gian</option>
									<option value="08h00 - 12h00">08h00 - 12h00</option>
									<option value=" 14h00 - 18h00"> 14h00 - 18h00</option>
									<option value=" 19h00 - 21h00"> 19h00 - 21h00</option>
									
								</select>
                        </div>
                    </div>
                   </form>
                </div>
            </div>
           </div>
        </div>
     );
}

export default Cart;