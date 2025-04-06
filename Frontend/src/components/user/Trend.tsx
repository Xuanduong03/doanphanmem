function Trend({title, src}: {title: string, src: string}) {
    return ( 
        <div>
        <a href="" className="flex flex-col items-center justify-center gap-1.5 hover:text-[#f03248]">
            <img src={src} alt="" />
            {title}
        </a>
        
    </div>
     );
}

export default Trend;