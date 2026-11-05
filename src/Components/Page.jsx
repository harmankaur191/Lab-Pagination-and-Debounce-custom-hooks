import PageList from "./PageList"
import usePagination from "../CustomHooks/usePagination"
import { useState } from "react";
import PaginationButton from "./PaginationButton";
export default function Page() {

    const [itemsPerPage, setItemsPerPage] = useState(10);
    const items = new Array(123);
    for (let i = 0; i < items.length; i++) {
        items[i] = 'Item-' + (i + 1);
    }
   
    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    } = usePagination({ totalItems: items.length, itemsPerPage: itemsPerPage });

     const currentItems = items.slice(startIndex, endIndex);
    const handleChange = (e) => {
        const val = Number(e.target.value);
        setItemsPerPage(val);
        if (val > 0)
            setPage(1);

    }
    console.log("items per page:", itemsPerPage);
    return (
        <div className=" flex flex-col text-white border-white border-1 p-3 max-w-fit gap-10 ">
            <h1 className="self-center">Pagination Demo</h1>
        <div className="flex justify-between">
           
            <div>  
             <label>Items per page: </label>
            <input type='number' id='itemsperpage' min={5} max={100} step={5} value={itemsPerPage} onChange={handleChange} />
            </div>
            
            <label>Total Items:{items.length}</label>
           
        </div>
             <PageList items={currentItems} />
        <div className="flex gap-4 justify-between">
            <button onClick={prevPage} disabled={!canPrevPage} >Previous</button>
            <p>Page {currentPage} of {totalPages}</p>
            <button onClick={nextPage} disabled={!canNextPage} >Next</button>
        </div>
        <PaginationButton totalPages={totalPages} setPage={setPage} currentPage={currentPage} />
        </div>
    )
}