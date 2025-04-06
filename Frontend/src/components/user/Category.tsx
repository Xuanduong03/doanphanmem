import arrow from '../../assets/arrow.svg'
interface T {
    name: string,
    children?: T[]
}
function Category({array,title, img, margin, more}: { array: T[], title: string,img: string, margin: boolean, more: boolean}) {
    return ( 
        <div className={`bg-white text-black w-[300px] rounded-[8px] ${margin && 'mt-[20px]'}`}>
        <div className='flex items-center py-[9px] px-[15px]'>
            <img src={img} alt="" className='mr-[15px]'/>
            <span className='text-[20px] font-bold'>{title}</span>
        </div>
        <ul>
            {array.map((item, index) => {
                return <li key={index} className='border-t border-t-stone-200'><a href='' className='text-[14px] hover:text-[#f03248] flex justify-between items-center py-[9px] px-[15px]'>{item.name} {item.children && <img src={arrow} className='w-[4px] hover:text-[#f03248]'/>}</a></li>
            })}
            {more && <li className='border-t border-t-stone-200'><a href='' className='text-[14px] hover:text-[#f03248] flex justify-between items-center py-[9px] px-[15px]'> Xem thêm ...</a></li>}
        </ul>
    </div>
     );
}

export default Category;