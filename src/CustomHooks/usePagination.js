import { useState } from "react";
import { useMemo } from "react";
export default function usePagination({ totalItems, itemsPerPage = 10, initialPage = 1 }) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const totalPages = useMemo(() => {
        return Math.max(1, Math.ceil(totalItems / itemsPerPage));
    }, [totalItems, itemsPerPage]);
    
    if(currentPage>totalPages && totalPages>0){
        setCurrentPage(totalPages);
    }
    const setPage =(pageNumber)=>{
        const page = Math.max(1, Math.min(pageNumber, totalPages));
    }

    const nextPage=()=>{
        if(currentPage<totalPages){
            setCurrentPage((prev)=>prev+1);

        }
    };

    const prevPage=()=>{
        if(currentPage > 1){
            setCurrentPage((prev)=>prev-1);
        }
    };

    const startIndex = (currentPage-1)* itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const itemsOnCurrentPage = Math.max(0, endIndex-startIndex);
    const canNextPage = currentPage<totalPages;
    const canPrevPage = currentPage >1;



    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    };
}