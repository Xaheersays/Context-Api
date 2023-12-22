function Template(props){
    let {img,title,author,idx}  = props;
    return (
        <>
        <div className="bg-gray-800 flex flex-col items-center gap-4 p-4 border border-yellow-100 max-w-lg" 
        style={{minHeight:500}}>
            <div className="flex-grow-[2]" >
            <img className="" src={img} alt="" />
            </div>
            <div><p className="bg-green-400 p-2  bottom-40" ># {idx+1}</p></div>
            <div>
            <h5 className="font-bold text-4xl text-indigo-700 text-center ">{title.toUpperCase()}</h5>
            </div>
            <div class="flex  gap-5 items-center justify-center ">
            <p className="text-sm tracking-2" style={{letterSpacing:2}}>{author}</p>
            
            </div>
        </div>
        </>
    )
}

export default Template