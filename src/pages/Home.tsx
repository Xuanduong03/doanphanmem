import menu from '../assets/menu.svg'
import search from '../assets/search2.svg'
import Category from '../components/Category';
import Trend from '../components/Trend';
import arrow from '../assets/arrows2.svg'
import { CiShoppingCart } from "react-icons/ci";
const categories = [
    { name: 'Đồ Chơi - Mẹ & Bé', children: [] },
    { name: 'Điện Thoại - Máy Tính Bảng', children: [] },
    { name: 'Làm Đẹp - Sức Khỏe', children: [] },
    { name: 'Điện Gia Dụng', children: [] },
    { name: 'Phụ kiện thời trang', children: [] },
    { name: 'Đồng hồ và Trang sức', children: [] },
    { name: 'Laptop - Máy Vi Tính - Linh kiện', children: [] },
    { name: 'Nhà cửa & Đời sống', children: [] },
    { name: 'Bách Hóa Online', children: [] },
    { name: 'Thiết Bị Số - Phụ Kiện Số'},
    { name: 'Điện Tử - Điện Lạnh - TV' }
  ];

  const trending = [
    { name: 'Khỏe đẹp' },
    { name: 'Nhà cửa' },
    { name: 'Sách' },
    { name: 'Bách hóa' },
    { name: 'Hải sản' },
    { name: 'Điện thoại' },
    { name: 'Laptop' }
];
function Home() {
    return ( 
      <>
      <div className="w-[1240px] max-w-[1240px] m-auto mt-[30px]">
        <div className='flex gap-[25px]'>
        <div>
              <Category array={categories} title='Danh mục' img={menu} margin = {false} more = {true}/>
              <Category array={trending} title='Xu hướng tìm kiếm' img={search} margin={true} more={false}/>
            </div>
                <div className='flex-1'>
                <div className='flex'>
                   <div>
                    <div className='flex w-[600px] h-[280px] overflow-hidden rounded-[8px]'>
                        <img src="//bizweb.dktcdn.net/thumb/grande/100/497/938/themes/938102/assets/slider_2.jpg?1736305669595" alt="" className=''/>
                        <img src="//bizweb.dktcdn.net/thumb/grande/100/497/938/themes/938102/assets/slider_2.jpg?1736305669595" />
                        <div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-2 items-center my-3'>
                    <span className='block w-2 h-2 bg-stone-400 rounded-[50%]'></span>
                    <span className='block w-2 h-2 bg-[#f03248]  rounded-[50%]'></span>
                    </div>

                    <div className='py-[19px] px-[10px] bg-white rounded-[8px] flex justify-between text-[14px] font-medium'>
                      <Trend title='Top 100 ưu đãi' src='//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_shortcut_1.jpg?1736305669595'/>
                      <Trend title='Mã giảm giá' src='//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_shortcut_2.jpg?1736305669595'/>
                      <Trend title='Quà tặng' src='//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_shortcut_3.jpg?1736305669595'/>
                      <Trend title='Xả kho' src='//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_shortcut_4.jpg?1736305669595'/>
                      <Trend title='Tìm kiếm nhiều' src='//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon_shortcut_5.jpg?1736305669595'/>
                    </div>
                   </div>
                   <div className='ml-auto'>
                  <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_banner_slider_1.jpg?1736305669595" alt="" className='w-[290px] h-[140px] object-cover rounded-[8px]' />
                  <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_banner_slider_2.jpg?1736305669595" alt="" className='w-[290px] h-[255px] object-cover rounded-[8px] mt-[20px]' />
                </div>
                </div>
                <div className='mt-[25px] bg-white p-[15px] rounded-[8px]'>
                  <div className='flex justify-between items-center border-b-1 border-stone-300 pb-[15px] relative before:content-[""] before:absolute before:w-[130px] before:h-[3px] before:bg-[#f03248] before:top-full mb-[30px]'>
                    <div className='flex gap-4 justify-center items-center'>
                  <a href="" className='text-[20px] font-bold'>Giá tốt mỗi ngày</a>
                  <div className='flex text-[#f03248] font-medium text-[14px] gap-2'>
                    <div className='w-[25px] h-[28px] border-1 border-[#f03248] flex items-center justify-center rounded-[3px]'>
                        96
                    </div>
                    <span>:</span>
                    <div className='w-[25px] h-[28px] border-1 border-[#f03248] flex items-center justify-center rounded-[3px]'>
                        22
                    </div>
                    <span>:</span>
                    <div className='w-[25px] h-[28px] border-1 border-[#f03248] flex items-center justify-center rounded-[3px]'>
                        44
                    </div>
                    <span>:</span>
                    <div className='w-[25px] h-[28px] border-1 border-[#f03248] flex items-center justify-center rounded-[3px]'>
                        55
                    </div>
                  </div>
                  </div>
                  <div className=''>
                    <a href="" className='hover:text-[#f03248] text-[14px] flex items-center justify-center gap-2'>Xem tất cả
                      <img src={arrow} />
                    </a>
                  </div>
                  </div>
                  <div className='w-[885px] flex gap-[20px] items-center scroll-smooth whitespace-nowrap'>
                    <article className='w-[205px] shrink'>
                      <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/sp20.jpg?v=1696241238643" alt="" className='w-[205px] h-[205px] object-contain mb-2.5' />
                      <a href="" className='line-clamp-2 line text-[14px] font-medium whitespace-normal'>
                      Tai Nghe Bluetooth Headphone Edifier W820NB PLUS thoáng khí thoải mái
                      </a>
                      <div className='flex justify-between items-center'>
                        <div>
                        <p className='text-[#f03248] font-bold'>1.399.000₫</p>
                        <p className='text-[12px] text-[#76809b] font-medium line-through'>2.399.000₫</p>
                        </div>
                        <button className='w-[30px] h-[30px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[20px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                      </div>
                      <span className='text-[12px] mb-3px font-normal text-[#2b2f3399]'>Đã bán 48</span>
                      <div className='h-[9px] bg-[#dfdfdf] rounded-[5px] relative mt-auto'>
                        <span className='block h-[9px] rounded-[5px] absolute bg-gradient-to-r from-[#FF6F1E] to-[#FF0F49] w-[50%]'></span>
                        <img src="https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-sale-bag.png?1736305588662" alt="" className='absolute -bottom-1.5 left-1.5'/>
                      </div>
                    </article>

                    <article className='w-[205px] shrink'>
                      <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/sp20.jpg?v=1696241238643" alt="" className='w-[205px] h-[205px] object-contain mb-2.5' />
                      <a href="" className='line-clamp-2 line text-[14px] font-medium whitespace-normal'>
                      Tai Nghe Bluetooth Headphone Edifier W820NB PLUS thoáng khí thoải mái
                      </a>
                      <div className='flex justify-between items-center'>
                        <div>
                        <p className='text-[#f03248] font-bold'>1.399.000₫</p>
                        <p className='text-[12px] text-[#76809b] font-medium line-through'>2.399.000₫</p>
                        </div>
                        <button className='w-[30px] h-[30px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[20px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                      </div>
                      <span className='text-[12px] mb-3px font-normal text-[#2b2f3399]'>Đã bán 48</span>
                      <div className='h-[9px] bg-[#dfdfdf] rounded-[5px] relative mt-auto'>
                        <span className='block h-[9px] rounded-[5px] absolute bg-gradient-to-r from-[#FF6F1E] to-[#FF0F49] w-[50%]'></span>
                        <img src="https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-sale-bag.png?1736305588662" alt="" className='absolute -bottom-1.5 left-1.5'/>
                      </div>
                    </article>
                    <article className='w-[205px] shrink'>
                      <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/sp20.jpg?v=1696241238643" alt="" className='w-[205px] h-[205px] object-contain mb-2.5' />
                      <a href="" className='line-clamp-2 line text-[14px] font-medium whitespace-normal'>
                      Tai Nghe Bluetooth Headphone Edifier W820NB PLUS thoáng khí thoải mái
                      </a>
                      <div className='flex justify-between items-center'>
                        <div>
                        <p className='text-[#f03248] font-bold'>1.399.000₫</p>
                        <p className='text-[12px] text-[#76809b] font-medium line-through'>2.399.000₫</p>
                        </div>
                        <button className='w-[30px] h-[30px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[20px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                      </div>
                      <span className='text-[12px] mb-3px font-normal text-[#2b2f3399]'>Đã bán 48</span>
                      <div className='h-[9px] bg-[#dfdfdf] rounded-[5px] relative mt-auto'>
                        <span className='block h-[9px] rounded-[5px] absolute bg-gradient-to-r from-[#FF6F1E] to-[#FF0F49] w-[50%]'></span>
                        <img src="https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-sale-bag.png?1736305588662" alt="" className='absolute -bottom-1.5 left-1.5'/>
                      </div>
                    </article>
                    <article className='w-[205px] shrink'>
                      <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/sp20.jpg?v=1696241238643" alt="" className='w-[205px] h-[205px] object-contain mb-2.5' />
                      <a href="" className='line-clamp-2 line text-[14px] font-medium whitespace-normal'>
                      Tai Nghe Bluetooth Headphone Edifier W820NB PLUS thoáng khí thoải mái
                      </a>
                      <div className='flex justify-between items-center'>
                        <div>
                        <p className='text-[#f03248] font-bold'>1.399.000₫</p>
                        <p className='text-[12px] text-[#76809b] font-medium line-through'>2.399.000₫</p>
                        </div>
                        <button className='w-[30px] h-[30px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[20px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
                      </div>
                      <span className='text-[12px] mb-3px font-normal text-[#2b2f3399]'>Đã bán 48</span>
                      <div className='h-[9px] bg-[#dfdfdf] rounded-[5px] relative mt-auto'>
                        <span className='block h-[9px] rounded-[5px] absolute bg-gradient-to-r from-[#FF6F1E] to-[#FF0F49] w-[50%]'></span>
                        <img src="https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-sale-bag.png?1736305588662" alt="" className='absolute -bottom-1.5 left-1.5'/>
                      </div>
                    </article>
                    
                  </div>
                </div>
                </div>
        </div>
            
                
        <div className='rounded-[8px] bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/bg-module-brand.png?1736305588662)] mt-[30px] p-[15px] mb-[25px]'>
          <div className='flex justify-between items-center border-b-1 border-b-stone-300 pb-[15px] relative before:content-[""] before:absolute before:w-[130px] before:h-[3px] before:bg-[#f03248] before:top-full mb-[20px]'>
          <div className='flex items-center gap-[10px]'>
            <img src="https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-title-brand.png?1736305669595" alt="" />
            <p className='text-[20px] font-bold'>Thương hiệu chính hãng</p>
          </div>
          <div className=''>
            <a href="" className='hover:text-[#f03248] text-[14px] flex items-center justify-center gap-2'>Xem tất cả
              <img src={arrow} />
            </a>
          </div>
          </div>
          <div className='overflow-hidden'>
          <div className='flex justify-between cursor-grab translate-x-[-200px] duration-200'>
            <div className='p-[15px] w-[181px] border-1 border-stone-200 bg-white rounded-[8px] text-center group mr-[25px] shrink-0'>
              <a href="">
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand1.jpg?1736305669595" alt="" className='mb-[20px] group-hover:scale-110 transition-all duration-500'/>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo_brand1.jpg?1736305669595" alt="" />
              </a>
            </div>
            <div className='p-[15px] w-[181px] border-1 border-stone-200 bg-white rounded-[8px] text-center group mr-[25px] shrink-0'>
              <a href="">
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand2.jpg?1736305669595" alt="" className='mb-[20px] group-hover:scale-110 transition-all duration-500'/>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo_brand2.jpg?1736305669595" alt="" />
              </a>
            </div>
            <div className='p-[15px] w-[181px] border-1 border-stone-200 bg-white rounded-[8px] text-center group mr-[25px] shrink-0'>
              <a href="">
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand3.jpg?1736305669595" alt="" className='mb-[20px] group-hover:scale-110 transition-all duration-500'/>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo_brand3.jpg?1736305669595" alt="" />
              </a>
            </div>
            <div className='p-[15px] w-[181px] border-1 border-stone-200 bg-white rounded-[8px] text-center group mr-[25px] shrink-0'>
              <a href="">
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand4.jpg?1736305669595" alt="" className='mb-[20px] group-hover:scale-110 transition-all duration-500'/>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo_brand4.jpg?1736305669595" alt="" />
              </a>
            </div>
            <div className='p-[15px] w-[181px] border-1 border-stone-200 bg-white rounded-[8px] text-center group mr-[25px] shrink-0'>
              <a href="">
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand5.jpg?1736305669595" alt="" className='mb-[20px] group-hover:scale-110 transition-all duration-500'/>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo_brand5.jpg?1736305669595" alt="" />
              </a>
            </div>
            <div className='p-[15px] w-[181px] border-1 border-stone-200 bg-white rounded-[8px] text-center group mr-[25px] shrink-0'>
              <a href="">
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand6.jpg?1736305669595" alt="" className='mb-[20px] group-hover:scale-110 transition-all duration-600'/>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo_brand6.jpg?1736305669595" alt="" />
              </a>
            </div>
            <div className='p-[15px] w-[181px] border-1 border-stone-200 bg-white rounded-[8px] text-center group mr-[25px] shrink-0'>
              <a href="">
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand1.jpg?1736305669595" alt="" className='mb-[20px] group-hover:scale-110 transition-all duration-500'/>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/logo_brand1.jpg?1736305669595" alt="" />
              </a>
            </div>
          </div>
          </div>
          
        </div>

        <div className='flex justify-between mb-[25px]'>
          <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_three_banner_1.png?1736305669595" alt="" />
          <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_three_banner_2.png?1736305669595" alt="" />
          <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_three_banner_3.png?1736305669595" alt="" />

        </div>

        <div className='rounded-[8px] bg-white mt-[30px] p-[15px] mb-[25px]'>
        <div className='flex justify-between items-center border-b-1 border-b-stone-300 pb-[15px] relative before:content-[""] before:absolute before:w-[130px] before:h-[3px] before:bg-[#f03248] before:top-full mb-[20px]'>
          <div className='flex items-center gap-[10px]'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-title-cate.png?1736305669595" alt="" />
            <p className='text-[20px] font-bold'>Danh mục nổi bật</p>
          </div>
          <div className=''>
            <a href="" className='hover:text-[#f03248] text-[14px] flex items-center justify-center gap-2'>Xem tất cả
              <img src={arrow} />
            </a>
          </div>
          </div>
          <div className='grid grid-cols-9 gap-[15px]'> <div className='flex flex-col items-center gap-[10px]'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_1.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Tivi
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_2.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Điện thoại & phụ kiện
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_3.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Máy ảnh & máy quay
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_4.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Tủ lạnh
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_5.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Điều hòa
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_6.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Máy giặt
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_7.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Laptop
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_8.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Quạt
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_9.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Đồ dùng nhà bếp
          </div>


          <div className='flex flex-col items-center gap-[10px]'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_10.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Thời trang nam
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_11.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Thời trang nữ
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_12.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Đồ chơi
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_13.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Sắc đẹp
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_14.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Thể thao
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_15.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Đồng hồ
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_16.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Balo & túi
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_17.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Sách truyện
          </div>
          <div className='flex flex-col items-center gap-[10px] text-center'>
            <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/img_cate_18.png?1736305669595" alt="" className='h-[63px] object-contain'/>
            Giày dép
          </div>
         </div>
         
        </div>


        <div className='grid grid-cols-12 gap-[20px]'>
        <div className='col-span-8'>
       <div className='flex items-center justify-between bg-[#f6dee1] rounded-tr-[8px] rounded-tl-[8px]'>
          <div className='bg-[#f03248] h-[60px] rounded-tr-[8px] rounded-tl-[8px] px-[20px] flex justify-center items-center text-white text-[20px] font-bold'>
            <div className='flex items-center justify-center gap-2'>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-title-best-selling.png?1736305669595" alt="" />
                Thương hiệu bán chạy
            </div>
            
          </div>
          <div className='mr-[15px]'>
                    <a href="" className='hover:text-[#f03248] text-[14px] flex items-center justify-center gap-2'>Xem tất cả
                      <img src={arrow} />
                    </a>
                  </div>
        </div>
        <div className='p-[15px] bg-white rounded-bl-[8px] rounded-br-[8px]'>
            <div className='flex items-center justify-between pb-[15px] mb-[15px] border-b-1 border-b-stone-200'>
              <div className='p-[10px] border-1 border-stone-200 bg-white rounded-[8px] w-[179px] flex items-center justify-center'>
                <a href=""><img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand21.jpg?1736305669595" alt="" /></a>
              </div>
              <div className='p-[10px] border-1 border-stone-200 bg-white rounded-[8px] w-[179px] flex items-center justify-center'>
                <a href=""><img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand22.jpg?1736305669595" alt="" /></a>
              </div>
              <div className='p-[10px] border-1 border-stone-200 bg-white rounded-[8px] w-[179px] flex items-center justify-center'>
               <a href=""> <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand23.jpg?1736305669595" alt="" /></a>
              </div>
              <div className='p-[10px] border-1 border-stone-200 bg-white rounded-[8px] w-[179px] flex items-center justify-center'>
                <a href=""><img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/brand24.jpg?1736305669595" alt="" /></a>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-[20px]'>
              <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px]'>
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
                <button className='w-[35px] h-[35px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
               </div>
               </div>
              </div>
              <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px]'>
                <a href="">
                  <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/sp6.jpg?v=1696237386673" alt="" className='w-full object-contain mb-[10px]'/>
                </a>
               <div className='px-[10px] pb-[10px]'>
               <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
               <div className='flex justify-between items-center'>
                <div>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                </div>
                <button className='w-[35px] h-[35px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
               </div>
               </div>
              </div>
              <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px]'>
                <a href="">
                  <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-649111dd-92cf-428e-a56b-55dd50ebcc46.jpg?v=1696234165607" alt="" className='w-full object-contain mb-[10px]'/>
                </a>
               <div className='px-[10px] pb-[10px]'>
               <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
               <div className='flex justify-between items-center'>
                <div>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                </div>
                <button className='w-[35px] h-[35px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
               </div>
               </div>
              </div>
              <div className='col-span-1 border-1 border-stone-200'>
                <a href="">
                  <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-93545103-640c-45ed-aa6c-62bfcfd3f19f.jpg?v=1696233511790" alt="" className='w-full object-contain mb-[10px]'/>
                </a>
               <div className='px-[10px] pb-[10px]'>
               <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
               <div className='flex justify-between items-center'>
                <div>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                </div>
                <button className='w-[35px] h-[35px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
               </div>
               </div>
              </div>
              <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px]'>
                <a href="">
                  <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/sp5.jpg?v=1696237196033" alt="" className='w-full object-contain mb-[10px]'/>
                </a>
               <div className='px-[10px] pb-[10px]'>
               <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
               <div className='flex justify-between items-center'>
                <div>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                </div>
                <button className='w-[35px] h-[35px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
               </div>
               </div>
              </div>
              <div className='col-span-1 border-1 border-stone-200 overflow-hidden rounded-[8px]'>
                <a href="">
                  <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-1b8641c8-6064-43a5-8e07-dc697eb04a6e.jpg?v=1696233327897" alt="" className='w-full object-contain mb-[10px]'/>
                </a>
               <div className='px-[10px] pb-[10px]'>
               <a href="" className='line text-[14px] line-clamp-2 font-medium mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</a>
               <div className='flex justify-between items-center'>
                <div>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                </div>
                <button className='w-[35px] h-[35px] shadow shadow-[#f03248] rounded-[50%] bg-white flex items-center justify-center text-[25px] text-[#f03248] hover:opacity-60 cursor-pointer'><CiShoppingCart /></button>
               </div>
               </div>
              </div>
            </div>
        </div>
       </div>
       <div className='col-span-4'>
       <div className='flex items-center justify-between bg-[#f6dee1] rounded-tr-[8px] rounded-tl-[8px]'>
          <div className='bg-[#f03248] h-[60px] rounded-tr-[8px] rounded-tl-[8px] px-[20px] flex justify-center items-center text-white text-[20px] font-bold'>
            <div className='flex items-center justify-center gap-2'>
                <img src="//bizweb.dktcdn.net/100/497/938/themes/938102/assets/icon-title-deal-hot.png?1736305669595" alt="" />
                Deal hot trong tuần
            </div>
            
          </div>
          <div className='mr-[15px]'>
                    <a href="" className='hover:text-[#f03248] text-[14px] flex items-center justify-center gap-2'>Xem tất cả
                      <img src={arrow} />
                    </a>
                  </div>
        </div>
        <div className='p-[15px] bg-white rounded-bl-[8px] rounded-br-[8px]'>
        <div className='flex flex-col gap-[20px]'>
        <div className='p-[10px] border-1 border-stone-200 rounded-[8px] flex items-center justify-between gap-[20px]'>
              <div className='w-[80px] h-[80px] shrink-0'>
               <a href=""> <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full h-full'/></a>
              </div>
              <div>
                <a href=""><p className='line font-medium text-[14px] line-clamp-2 mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</p></a>
                <div className='flex items-center gap-[10px]'>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
                <p className='text-[12px] text-[#76809b] line-through font-medium'>450.000₫</p>
                <span className='bg-[url(https://bizweb.dktcdn.net/100/497/938/themes/938102/assets/background-smart.png?1736305506807)] w-[50px] h-[24px] rounded-[5px] flex justify-center items-center text-[12px] font-bold text-white'>- 22%</span>
                </div>
              </div>
            </div>
            <div className='p-[10px] border-1 border-stone-200 rounded-[8px] flex items-center justify-between gap-[20px]'>
              <div className='w-[80px] h-[80px] shrink-0'>
               <a href=""> <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full h-full'/></a>
              </div>
              <div>
                <a href=""><p className='line font-medium text-[14px] line-clamp-2 mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</p></a>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
              </div>
            </div>
            <div className='p-[10px] border-1 border-stone-200 rounded-[8px] flex items-center justify-between gap-[20px]'>
              <div className='w-[80px] h-[80px] shrink-0'>
               <a href=""> <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full h-full'/></a>
              </div>
              <div>
                <a href=""><p className='line font-medium text-[14px] line-clamp-2 mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</p></a>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
              </div>
            </div>
            <div className='p-[10px] border-1 border-stone-200 rounded-[8px] flex items-center justify-between gap-[20px]'>
              <div className='w-[80px] h-[80px] shrink-0'>
               <a href=""> <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full h-full'/></a>
              </div>
              <div>
                <a href=""><p className='line font-medium text-[14px] line-clamp-2 mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</p></a>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
              </div>
            </div>
            <div className='p-[10px] border-1 border-stone-200 rounded-[8px] flex items-center justify-between gap-[20px]'>
              <div className='w-[80px] h-[80px] shrink-0'>
               <a href=""> <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full h-full'/></a>
              </div>
              <div>
                <a href=""><p className='line font-medium text-[14px] line-clamp-2 mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</p></a>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
              </div>
            </div>
            <div className='p-[10px] border-1 border-stone-200 rounded-[8px] flex items-center justify-between gap-[20px]'>
              <div className='w-[80px] h-[80px] shrink-0'>
               <a href=""> <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full h-full'/></a>
              </div>
              <div>
                <a href=""><p className='line font-medium text-[14px] line-clamp-2 mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</p></a>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
              </div>
            </div>
            <div className='p-[10px] border-1 border-stone-200 rounded-[8px] flex items-center justify-between gap-[20px]'>
              <div className='w-[80px] h-[80px] shrink-0'>
               <a href=""> <img src="//bizweb.dktcdn.net/thumb/large/100/497/938/products/1-46497655-9e5d-4788-8b79-51d1da47d366.jpg?v=1696233634543" alt="" className='w-full h-full'/></a>
              </div>
              <div>
                <a href=""><p className='line font-medium text-[14px] line-clamp-2 mb-[10px]'>SERUM cấp ẩm Skinavis chứa Hyaluronic Acid và B5 dành cho mọi loại da - 30ml</p></a>
                <p className='text-[16px] font-bold text-[#f03248] self-start'>350.000₫</p>
              </div>
        </div>
           
            </div>
        </div>
       </div>
        </div>
        <div className='mt-[25px] rounded-[8px] bg-white p-[15px]'>
            <div className='flex items-center justify-between'>
           <a href=""> <p className='text-[20px] text-[#333] font-bold line'>
              Tin tức mới nhất
            </p></a>
            <a href='' className='flex text-[#f03248] text-[14px] hover:text-inherit items-center gap-[5px]'>
              <p>Xem thêm</p>
              <p className='font-bold'>Tin tức mới nhất  ❯</p>
            </a>
            </div>
            <div className='grid grid-cols-12 gap-[10px]'>
              <div className='col-span-4'>
                <div className='h-[216px]'>
                 <a href="">
                 <img src="//bizweb.dktcdn.net/thumb/grande/100/497/938/articles/t12.jpg?v=1696325901413" alt="" className='w-full object-contain' />
                 <p className='line text-[16px] font-bold mt-[10px]'>Xiaomi 13 đang được thử nghiệm MIUI 15 ổn định dựa trên Android 14</p>
                 <p className='mt-[5px] text-[#4d4d4d]'>Xiaomi đang thử nghiệm bản cập nhật ổn định MIUI 15 cho Xiaomi 13 Series, theo báo cáo mới từ Xiaomiui. Điều này diễn ra sau một tuần Xiaomi tạm dừng phát triển MIUI 14 cho dòng Xiao...
						</p>
                 </a>
                </div>
              </div>
              <div className='col-span-5'>
                <div className='flex items-center gap-[10px]'>
                <div className='w-[140px] h-[80px] shrink-0'>
                  <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t11.jpg?v=1696325869497" alt="" className='w-full h-full bg-red-600' />
                </div>
                <a href="" className=' self-start'>
                  <p className='text-[14px] text-[#303846] font-bold hover:text-[#f03248]'>Apple Pencil 3 khả năng có cơ chế thay ngòi cùng với tính năng hoàn toàn mới</p>
                  </a>
                </div>
                <div className='flex items-center border-t-1 border-t-stone-200 pt-[7px] mt-[7px] gap-[10px]'>
                <div className='w-[140px] h-[80px] shrink-0'>
                  <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t10.jpg?v=1696325835147" alt="" className='w-full h-full bg-red-600' />
                </div>
                <a href="" className=' self-start'>
                  <p className='text-[14px] text-[#303846] font-bold hover:text-[#f03248]'>Tư vấn chọn mua laptop HP hỗ trợ tác vụ học tập văn phòng cơ bản bán chạy tại TGDĐ</p>
                  </a>
                </div>
                <div className='flex items-center border-t-1 border-t-stone-200 pt-[7px] mt-[7px] gap-[10px]'>
                <div className='w-[140px] h-[80px] shrink-0'>
                  <img src="//bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t9.jpg?v=1696325755650" alt="" className='w-full h-full bg-red-600' />
                </div>
                <a href="" className=' self-start'>
                  <p className='text-[14px] text-[#303846] font-bold hover:text-[#f03248]'>Apple dự kiến sẽ sớm đưa một công cụ mạnh mẽ tích hợp AI lên App Store</p>
                  </a>
                </div>
                <div className='flex items-center border-t-1 border-t-stone-200 pt-[7px] mt-[7px] gap-[10px]'>
                <div className='w-[140px] h-[80px] shrink-0'>
                  <img src="https://bizweb.dktcdn.net/thumb/medium/100/497/938/articles/t8.jpg?v=1696325716373" alt="" className='w-full h-full bg-red-600' />
                </div>
                <a href="" className='self-start'>
                  <p className='text-[14px] text-[#303846] font-bold hover:text-[#f03248]'>Tầm giá 1 triệu, rinh ngay combo tai nghe + loa này, chất lượng khỏi bàn, chill nhạc miễn chê</p>
                  </a>
                </div>
              </div>
              <div className='col-span-3 border-2 border-[#f03248]'>
                <div className='px-[10px] py-[6px] bg-[#f03248]'>
                  <p className='uppercase font-medium text-white'> Mẹo vặt</p>
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
        
        
      </>
        
        
     );
}

export default Home;