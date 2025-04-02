import arrow from '../../assets/arrow.svg'
function Intro() {
    return ( 
        <div className='bg-white h-full w-full'>
            <div className="max-w-[1240px] m-auto">
            <ul className='py-[15px] flex items-center gap-[10px]'>
                <li className='flex items-center gap-[10px]'>
                    <a href="" className='text-[#2b2f3366] hover:text-[#f03248]'>Trang chủ</a>
                    <img src={arrow} alt="" className='w-[10px] h-[10px]'/>
                </li>
                <li>
                    <a href="" className='text-[#f03248]'>
                        Giới thiệu
                    </a>
                </li>
            </ul>
            <div className='grid grid-cols-12'>
                <div className='col-span-12'>
                    <div className='min-h-[400px]'>
                    <h1 className='text-[28px] font-medium mb-[10px]'>Giới thiệu</h1>
                    <p className='mb-[20px]'>Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì ND Mall là một sự lựa chọn tuyệt vời dành cho bạn. ND Mall là trang thương mại điện tử cho phép người mua và người bán tương tác và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi của shop. Do đó, việc mua bán trên ND Mall trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, ND Mall Blog - trang blog thông tin chính thức của ND Mall - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.</p>
                    <p>Đến với ND Mall, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tự tạo chương trình khuyến mãi trên ND Mall để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại ND Mall Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Intro;