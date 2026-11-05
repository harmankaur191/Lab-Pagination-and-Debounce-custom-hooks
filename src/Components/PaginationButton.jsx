export default function PaginationButton({totalPages,setPage,currentPage}){
    
    const buttons =[];
    for(let i=1;i<=totalPages;i++){
                buttons.push(
                    <button key={i} onClick={()=> setPage(i)} className={`p-1 border-white border-1 rounded-md ${currentPage==i? 'bg-blue-600 text-white font-bold':'bg-white text-black font-bold hover:bg-gray-700'}`}>{i}</button>
                   
                )
            }
    return(
        <div className=" flex flex-col gap-5 place-items-center  ">
             <p>Showing items {currentPage} of {totalPages}</p>
             <div className="flex gap-2 justify-center text-white">
           
            {buttons}
        </div>
        </div>
        
    )
}