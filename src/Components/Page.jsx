import PageList from "./PageList"
import usePagination from "../CustomHooks/usePagination"
export default function Page({items}){
    
    return(
        <div className="text-white">
            <h1>Pagination Demo</h1>
            <label>Items per page: </label>
            <input type='number' id='itemsperpage' min={5} max={100} step={5} />
            <label>Total Items:{items.length}</label>
            
            <PageList items={items}/>
        
        </div>
    )
}